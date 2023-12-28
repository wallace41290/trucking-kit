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
  DestroyRef,
  effect,
  inject,
  OnInit,
  untracked,
} from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProfileStore } from '@trucking-kit/profile/data-access';

const structure: Field[] = [
  {
    type: 'INPUT',
    name: 'name',
    placeholder: 'Name',
    validator: [Validators.required],
  },
  {
    type: 'TEXTAREA',
    name: 'address',
    placeholder: 'Address',
    validator: [],
  },
];

@Component({
  selector: 'tk-profile-edit',
  standalone: true,
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
  imports: [DynamicFormComponent, ListErrorsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileEditComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly profileStore = inject(ProfileStore);
  private readonly destroyRef = inject(DestroyRef);

  structure$ = this.store.select(ngrxFormsQuery.selectStructure);
  data$ = this.store.select(ngrxFormsQuery.selectData);

  readonly setProfileDataToForm = effect(() => {
    const profileLoaded = this.profileStore.getProfileLoaded();
    if (profileLoaded) {
      untracked(() =>
        this.store.dispatch(
          formsActions.setData({ data: this.profileStore.userAttributes() })
        )
      );
    }
  });

  ngOnInit() {
    this.store.dispatch(formsActions.setStructure({ structure }));
  }

  updateForm(changes: Record<string, unknown>) {
    this.store.dispatch(formsActions.updateData({ data: changes }));
  }

  submit() {
    this.profileStore.updateProfile();
  }

  ngOnDestroy() {
    this.store.dispatch(formsActions.initializeForm());
  }
}
