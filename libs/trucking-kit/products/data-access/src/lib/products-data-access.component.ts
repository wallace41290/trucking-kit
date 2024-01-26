import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-products-data-access',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-data-access.component.html',
  styleUrl: './products-data-access.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsDataAccessComponent {}
