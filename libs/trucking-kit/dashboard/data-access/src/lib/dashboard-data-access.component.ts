import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-dashboard-data-access',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-data-access.component.html',
  styleUrl: './dashboard-data-access.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardDataAccessComponent {}
