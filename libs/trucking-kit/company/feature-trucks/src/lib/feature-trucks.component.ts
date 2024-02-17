import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TruckService } from '@trucking-kit/company/data-access';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RequestError, Truck } from '@shared/models';

@Component({
  selector: 'tk-feature-trucks',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './feature-trucks.component.html',
  styleUrl: './feature-trucks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureTrucksComponent {
  truckService = inject(TruckService);
  createForm: FormGroup;

  trucks$ = signal<Truck[]>([]);
  creatingTruck$ = signal(false);
  error$ = signal('');
  loadingTrucks$ = signal(false);

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      unitNumber: ['', Validators.required],
      make: [''],
      year: [''],
    });

    this.fetchTrucks();
  }

  public async onCreate(truck: Truck) {
    this.error$.set('');
    this.creatingTruck$.set(true);

    const newTruck = {
      make: truck.make,
      unitNumber: truck.unitNumber,
      year: truck.year,
      tag: '1123A',
    };

    this.truckService.createTruck(newTruck).subscribe({
      next: (results) => {
        this.trucks$.set([...this.trucks$(), results.data.createTruck]);
        console.log('Companies Component - GraphQL response', results);
        this.creatingTruck$.set(false);
      },
      error: (e) => {
        console.error('error creating Truck', e);
        if (this.isRequestError(e) && e.errors.length) {
          this.error$.set(e.errors[0].message);
        }
        this.creatingTruck$.set(false);
      },
    });
  }

  public async onDelete(truckId: string | undefined) {
    if (truckId) {
      this.error$.set('');

      this.truckService.deleteTruck(truckId).subscribe({
        next: (results) => {
          this.trucks$.set(
            this.trucks$().filter((truck) => truck.id !== truckId)
          );
          console.log('Trucks Component - GraphQL response', results);
        },
        error: (e) => {
          console.error('error deleting truck', e);
          if (this.isRequestError(e) && e.errors.length) {
            this.error$.set(e.errors[0].message);
          }
        },
      });
    }
  }

  private async fetchTrucks() {
    this.error$.set('');
    this.loadingTrucks$.set(true);

    this.truckService.fetchTrucks().subscribe({
      next: (results) => {
        this.trucks$.set(results.data.listTrucks.items);
        this.loadingTrucks$.set(false);
      },
      error: (e) => {
        console.error('error fetching trucks', e);
        if (this.isRequestError(e) && e.errors.length) {
          this.error$.set(e.errors[0].message);
        }
        this.loadingTrucks$.set(false);
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
