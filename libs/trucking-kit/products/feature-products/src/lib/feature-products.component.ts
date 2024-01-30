import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'tk-feature-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feature-products.component.html',
  styleUrl: './feature-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureProductsComponent {}
