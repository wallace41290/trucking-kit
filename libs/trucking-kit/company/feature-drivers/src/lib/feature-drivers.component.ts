import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'tk-feature-drivers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feature-drivers.component.html',
  styleUrl: './feature-drivers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureDriversComponent {}
