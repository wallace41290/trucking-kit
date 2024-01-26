import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tk-trucking-kit-shared-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trucking-kit-shared-ui.component.html',
  styleUrl: './trucking-kit-shared-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TruckingKitSharedUiComponent {}
