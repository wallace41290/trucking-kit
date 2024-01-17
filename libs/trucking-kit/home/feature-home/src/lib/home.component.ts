import {
  Component,
  ChangeDetectionStrategy,
  inject,
  OnInit,
  computed,
} from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { ProfileStore } from '@trucking-kit/profile/data-access';
import { CompaniesComponent } from '../../../../companies/companies.component';

@Component({
  selector: 'tk-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [CompaniesComponent],
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  authenticatorService = inject(AuthenticatorService);
  profileStore = inject(ProfileStore);

  $loadingProfile = this.profileStore.getProfileLoading;
  $userAttributes = this.profileStore.userAttributes;

  $name = computed(
    () =>
      this.$userAttributes().name ||
      this.authenticatorService.user.signInDetails?.loginId
  );

  ngOnInit() {
    this.profileStore.getProfile();
  }
}
