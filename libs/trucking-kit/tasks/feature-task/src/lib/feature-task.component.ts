import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-feature-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-task.component.html',
  styleUrl: './feature-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureTaskComponent {
  @Input() id!: string;
}
