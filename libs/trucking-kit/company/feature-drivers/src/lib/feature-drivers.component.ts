import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DriverService } from '@trucking-kit/company/data-access';
import { Driver, RequestError } from '@shared/models';

@Component({
  selector: 'tk-feature-drivers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './feature-drivers.component.html',
  styleUrl: './feature-drivers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureDriversComponent {
  driverService = inject(DriverService);
  createForm: FormGroup;

  drivers$ = signal<Driver[]>([]);
  creatingDriver$ = signal(false);
  error$ = signal('');
  loadingDrivers$ = signal(false);

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      cdlNumber: [''],
    });

    this.fetchDrivers();
  }

  public async onCreate(driver: Driver) {
    this.error$.set('');
    this.creatingDriver$.set(true);

    const newDriver = {
      cdlNumber: driver.cdlNumber,
      firstName: driver.firstName,
      lastName: driver.lastName,
      email: driver.email,
    };

    this.driverService.createDriver(newDriver).subscribe({
      next: (results) => {
        this.drivers$.set([...this.drivers$(), results.data.createDriver]);
        console.log('Companies Component - GraphQL response', results);
        this.creatingDriver$.set(false);
      },
      error: (e) => {
        console.error('error creating Driver', e);
        if (this.isRequestError(e) && e.errors.length) {
          this.error$.set(e.errors[0].message);
        }
        this.creatingDriver$.set(false);
      },
    });
  }

  public async onDelete(driverId: string | undefined) {
    if (driverId) {
      this.error$.set('');

      this.driverService.deleteDriver(driverId).subscribe({
        next: (results) => {
          this.drivers$.set(
            this.drivers$().filter((driver) => driver.id !== driverId)
          );
          console.log('Drivers Component - GraphQL response', results);
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

  private async fetchDrivers() {
    this.error$.set('');
    this.loadingDrivers$.set(true);

    this.driverService.fetchDrivers().subscribe({
      next: (results) => {
        this.drivers$.set(results.data.listDrivers.items);
        this.loadingDrivers$.set(false);
      },
      error: (e) => {
        console.error('error fetching drivers', e);
        if (this.isRequestError(e) && e.errors.length) {
          this.error$.set(e.errors[0].message);
        }
        this.loadingDrivers$.set(false);
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
