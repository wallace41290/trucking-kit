import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestError, Truck } from '@shared/models';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TruckService } from '@trucking-kit/company/data-access';

@Component({
  selector: 'tk-feature-truck',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feature-truck.component.html',
  styleUrl: './feature-truck.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureTruckComponent implements OnInit {
  @Input() id!: string;

  currentTruck$ = signal<Truck | null>(null);
  loadingTruck$ = signal(false);
  truckService = inject(TruckService);
  error$ = signal('');
  updateForm: FormGroup;
  updatingTruck$ = signal(false);

  constructor(private fb: FormBuilder) {
    this.updateForm = this.fb.group({
      unitNumber: ['', Validators.required],
      make: [''],
      year: [''],
    });
  }

  ngOnInit(): void {
    this.getTruck();
  }

  public async onUpdate(truck: Truck) {
    this.error$.set('');
    this.updatingTruck$.set(true);

    const updatedTruck = {
      id: this.id,
      unitNumber: truck.unitNumber,
      tag: truck.tag,
      make: truck.make,
      year: truck.year,
    };

    this.truckService.updateTruck(updatedTruck).subscribe({
      next: (results) => {
        this.currentTruck$.set(results.data.updateTruck);
        console.log('Feat Truck Component - GraphQL response', results);
        this.updatingTruck$.set(false);
      },
      error: (e) => {
        console.error('error creating Truck', e);
        if (this.isRequestError(e) && e.errors.length) {
          this.error$.set(e.errors[0].message);
        }
        this.updatingTruck$.set(false);
      },
    });
  }

  private async getTruck() {
    this.error$.set('');
    this.loadingTruck$.set(true);

    this.truckService.getTruck(this.id).subscribe({
      next: (results) => {
        this.currentTruck$.set(results.data.getTruck);
        console.log(
          'Feat Truck Component - GraphQL response',
          this.currentTruck$()
        );
        this.updateForm.patchValue({
          unitNumber: this.currentTruck$()?.unitNumber,
          make: this.currentTruck$()?.make,
          year: this.currentTruck$()?.year,
        });

        this.loadingTruck$.set(false);
      },
      error: (e) => {
        console.error('error getting truck', e);
        if (this.isRequestError(e) && e.errors.length) {
          this.error$.set(e.errors[0].message);
        }
        this.loadingTruck$.set(false);
      },
    });
  }

  private isRequestError(something: unknown): something is RequestError {
    return (
      !!something &&
      typeof something === 'object' &&
      'errors' in something &&
      Array.isArray(something.errors)
    );
  }
}
