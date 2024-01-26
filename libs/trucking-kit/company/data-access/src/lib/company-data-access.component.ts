import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-company-data-access',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-data-access.component.html',
  styleUrl: './company-data-access.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyDataAccessComponent {}
