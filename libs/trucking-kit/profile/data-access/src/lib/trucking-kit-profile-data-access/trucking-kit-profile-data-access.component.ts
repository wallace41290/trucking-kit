import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trucking-kit-profile-data-access.component.html',
  styleUrl: './trucking-kit-profile-data-access.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TruckingKitProfileDataAccessComponent {}
