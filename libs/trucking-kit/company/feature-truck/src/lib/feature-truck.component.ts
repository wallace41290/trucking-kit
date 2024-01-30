import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-feature-truck',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-truck.component.html',
  styleUrl: './feature-truck.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureTruckComponent {
  @Input() id!: string;
}
