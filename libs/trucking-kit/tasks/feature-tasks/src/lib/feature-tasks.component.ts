import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'tk-feature-tasks',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feature-tasks.component.html',
  styleUrl: './feature-tasks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureTasksComponent {}
