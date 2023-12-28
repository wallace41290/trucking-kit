import { Field } from '../+state/forms.interfaces';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { debounceTime, map, tap, filter } from 'rxjs/operators';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'tk-dynamic-form',
  standalone: true,
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  imports: [ReactiveFormsModule, DynamicFieldDirective, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DynamicFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);

  @Input() structure$!: Observable<Field[]>;
  @Input() data$!: Observable<Record<string, unknown>>;
  @Input() touchedForm$!: Observable<boolean>;
  @Output() updateForm: EventEmitter<Record<string, unknown>> =
    new EventEmitter();
  form!: FormGroup;

  ngOnInit() {
    this.structure$
      .pipe(
        map(this.formBuilder),
        tap((f) => (this.form = f)),
        tap((f) => this.listenFormChanges(f)),
        (f$) => combineLatest([f$, this.data$]),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(this.patchValue);

    if (this.touchedForm$) {
      this.touchedForm$
        .pipe(
          filter((t) => !t && !!this.form),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe(() => this.form.reset());
    }
  }

  private formBuilder = (structure: Field[]): FormGroup => {
    const group = this.fb.group({});
    structure.forEach((field) =>
      group.addControl(field.name, this.control(field))
    );
    return group;
  };

  private control = (field: Field): FormControl => {
    return this.fb.control('', field.validator);
  };

  private patchValue = ([form, data]: [FormGroup, Record<string, unknown>]) => {
    data
      ? form.patchValue(data, { emitEvent: false })
      : form.patchValue({}, { emitEvent: false });
  };

  private listenFormChanges(form: FormGroup) {
    form.valueChanges
      .pipe(debounceTime(100), takeUntilDestroyed(this.destroyRef))
      .subscribe((changes: Record<string, unknown>) =>
        this.updateForm.emit(changes)
      );
  }
}
