import {
  DynamicFormComponent,
  Field,
  formsActions,
  ListErrorsComponent,
  ngrxFormsQuery,
} from '@shared/forms';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthStore } from '@shared/auth/data-access';
import { Store } from '@ngrx/store';

const structure: Field[] = [
  {
    type: 'INPUT',
    name: 'code',
    placeholder: 'Code',
    validator: [Validators.required],
  },
];

@Component({
  selector: 'tk-confirm-registration',
  standalone: true,
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.scss'],
  imports: [ListErrorsComponent, DynamicFormComponent, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmRegistrationComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly authStore = inject(AuthStore);

  structure$ = this.store.select(ngrxFormsQuery.selectStructure);
  data$ = this.store.select(ngrxFormsQuery.selectData);

  ngOnInit() {
    this.store.dispatch(formsActions.setStructure({ structure }));
  }

  updateForm(changes: Record<string, unknown>) {
    this.store.dispatch(formsActions.updateData({ data: changes }));
  }

  resend() {
    this.authStore.resendCode();
  }

  submit() {
    this.authStore.confirmRegistration();
  }

  ngOnDestroy() {
    this.store.dispatch(formsActions.initializeForm());
  }
}
