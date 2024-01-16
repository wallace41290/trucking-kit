import {
  Component,
  ChangeDetectionStrategy,
  inject,
  OnInit,
  computed,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { ProfileStore } from '@trucking-kit/profile/data-access';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
// import * as queries from '../../../../../../apps/trucking-kit/src/graphql/queries.js';

export type Company = {
  city: string;
  companyName: string;
  dotNumber: string;
  state: string;
  streetAddress: string;
  zipCode: number;
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
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  graphqlQueries = require('../../../../../../apps/trucking-kit/src/graphql/queries.js');
  mutations = require('../../../../../../apps/trucking-kit/src/graphql/mutations.js');
  authenticatorService = inject(AuthenticatorService);
  profileStore = inject(ProfileStore);

  public createForm: FormGroup;
  $loadingProfile = this.profileStore.getProfileLoading;
  $userAttributes = this.profileStore.userAttributes;

  client = generateClient();
  companies: Company[] = [];

  $name = computed(
    () =>
      this.$userAttributes().name ||
      this.authenticatorService.user.signInDetails?.loginId
  );

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      companyName: ['', Validators.required],
      dotNumber: ['', Validators.required],
    });
  }

  public async onCreate(company: Company) {
    try {
      const newCompany = {
        companyName: company.companyName,
        city: 'Knoxville',
        state: 'TN',
        streetAddress: '123 First Ave',
        zipCode: 27384,
        dotNumber: company.dotNumber,
      };
      console.log('newCompany', newCompany);
      const response = (await this.client.graphql({
        query: this.mutations.createCompany,
        variables: {
          input: newCompany,
        },
      })) as GraphQLResult;
      console.log('response', response);
    } catch (e) {
      console.log('error creating company...', e);
    }
  }

  async ngOnInit() {
    try {
      const response = (await this.client.graphql<GraphQLResult>({
        query: this.graphqlQueries.listCompanies,
      })) as GraphQLResult<ListCompaniesQuery>;

      this.companies = response.data.listCompanies.items;
    } catch (e) {
      console.log('error fetching companies', e);
    }
    this.profileStore.getProfile();
  }
}
