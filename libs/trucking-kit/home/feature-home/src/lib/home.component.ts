import {
  Component,
  ChangeDetectionStrategy,
  inject,
  OnInit,
  computed,
} from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { ProfileStore } from '@trucking-kit/profile/data-access';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
// import * as queries from '../../../../../../apps/trucking-kit/src/graphql/queries.js';

export type Company = {
  city: string;
  companyName: string;
  dotNumber: number;
  state: string;
  streetAddress: string;
  zipCode: string;
};

export type ListCompaniesQuery = {
  listCompanies: ListCompaniesQueryResult;
};

export type ListCompaniesQueryResult = {
  items: Company[];
};

@Component({
  selector: 'tk-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  graphqlQueries = require('../../../../../../apps/trucking-kit/src/graphql/queries.js');
  mutations = require('../../../../../../apps/trucking-kit/src/graphql/mutations.js');
  authenticatorService = inject(AuthenticatorService);
  profileStore = inject(ProfileStore);

  $loadingProfile = this.profileStore.getProfileLoading;
  $userAttributes = this.profileStore.userAttributes;

  client = generateClient();
  companies: any;

  $name = computed(
    () =>
      this.$userAttributes().name ||
      this.authenticatorService.user.signInDetails?.loginId
  );

  public async onCreate(company: Company) {
    try {
      await this.client.graphql({
        query: this.mutations.createCompany,
        variables: {
          input: company,
        },
      });
    } catch (e) {
      console.log('error creating company...', e);
    }
  }

  async ngOnInit() {
    try {
      const response = (await this.client.graphql<GraphQLResult>({
        query: this.graphqlQueries.listCompanies,
      })) as GraphQLResult<ListCompaniesQuery>;
      console.log('response', response.data.listCompanies.items);
      this.companies = response.data.listCompanies.items;
      console.log('hello im here', this.companies);
    } catch (e) {
      console.log('error fetching companies', e);
    }
    this.profileStore.getProfile();
  }
}
