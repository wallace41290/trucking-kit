import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-feature-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-product.component.html',
  styleUrl: './feature-product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureProductComponent {}
