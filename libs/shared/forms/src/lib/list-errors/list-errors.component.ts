import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ngrxFormsQuery } from '../+state/forms.selectors';
import { formsActions } from '../+state/forms.actions';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'tk-list-errors',
  standalone: true,
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListErrorsComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);

  errors: string[] = [];

  ngOnInit() {
    this.store
      .select(ngrxFormsQuery.selectErrors)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((e) => {
        this.errors = Object.keys(e || {}).map((key) => `${key} ${e[key]}`);
        this.changeDetectorRef.markForCheck();
      });
  }

  ngOnDestroy() {
    this.store.dispatch(formsActions.initializeErrors());
  }
}
