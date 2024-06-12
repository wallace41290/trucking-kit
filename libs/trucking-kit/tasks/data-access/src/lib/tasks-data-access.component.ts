import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-tasks-data-access',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks-data-access.component.html',
  styleUrl: './tasks-data-access.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksDataAccessComponent {}
