import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-feature-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-driver.component.html',
  styleUrl: './feature-driver.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureDriverComponent {
  @Input() id!: string;
}
