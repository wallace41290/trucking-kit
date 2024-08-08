import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { CompanyStore } from '@trucking-kit/company/data-access';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'trucking-kit-feature-company-overview',
  standalone: true,
  imports: [
    CommonModule,
    KeyValuePipe,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
  ],
  templateUrl: './feature-company-overview.component.html',
  styleUrl: './feature-company-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCompanyOverviewComponent {
  store = inject(CompanyStore);

  update(form: NgForm) {
    console.table(form.value);
  }
}
