import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DriverService } from '@trucking-kit/company/data-access';
import { Driver, RequestError } from '@shared/models';

@Component({
  selector: 'tk-feature-driver',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feature-driver.component.html',
  styleUrl: './feature-driver.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureDriverComponent implements OnInit {
  @Input() id!: string;

  currentDriver$ = signal<Driver | null>(null);
  loadingDriver$ = signal(false);
  driverService = inject(DriverService);
  error$ = signal('');
  updateForm: FormGroup;
  updatingDriver$ = signal(false);

  constructor(private fb: FormBuilder) {
    this.updateForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getDriver();
  }

  public async onUpdate(driver: Driver) {
    this.error$.set('');
    this.updatingDriver$.set(true);

    const updatedDriver = {
      id: this.id,
      firstName: driver.firstName,
      lastName: driver.lastName,
      email: driver.email,
      cdlNumber: driver.cdlNumber,
    };

    this.driverService.updateDriver(updatedDriver).subscribe({
      next: (results) => {
        this.currentDriver$.set(results.data.updateDriver);
        console.log('Feat Driver Component - GraphQL response', results);
        this.updatingDriver$.set(false);
      },
      error: (e) => {
        console.error('error creating Driver', e);
        if (this.isRequestError(e) && e.errors.length) {
          this.error$.set(e.errors[0].message);
        }
        this.updatingDriver$.set(false);
      },
    });
  }

  private async getDriver() {
    this.error$.set('');
    this.loadingDriver$.set(true);

    this.driverService.getDriver(this.id).subscribe({
      next: (results) => {
        this.currentDriver$.set(results.data.getDriver);
        console.log(
          'Feat Driver Component - GraphQL response',
          this.currentDriver$()
        );
        this.updateForm.patchValue({
          firstName: this.currentDriver$()?.firstName,
          lastName: this.currentDriver$()?.lastName,
          email: this.currentDriver$()?.email,
        });

        this.loadingDriver$.set(false);
      },
      error: (e) => {
        console.error('error getting Driver', e);
        if (this.isRequestError(e) && e.errors.length) {
          this.error$.set(e.errors[0].message);
        }
        this.loadingDriver$.set(false);
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
