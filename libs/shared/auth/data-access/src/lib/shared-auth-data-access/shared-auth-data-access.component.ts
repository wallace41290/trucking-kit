import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-auth-data-access.component.html',
  styleUrl: './shared-auth-data-access.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedAuthDataAccessComponent {}
