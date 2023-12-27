import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'trucking-kit-shared-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-auth.component.html',
  styleUrl: './shared-auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedAuthComponent {}
