import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CompanyStore } from '@trucking-kit/company/data-access';
import { take } from 'rxjs';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'tk-feature-company',
  standalone: true,
  imports: [CommonModule, MatDividerModule, RouterModule],
  templateUrl: './feature-company.component.html',
  styleUrl: './feature-company.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCompanyComponent implements OnInit {
  store = inject(CompanyStore);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.data.pipe(take(1)).subscribe((data) => {
      const dotNumber = data['dotNumber'];
      if (dotNumber) {
        this.store.get(dotNumber);
      } else {
        this.store.fetch();
      }
    });
  }
}
