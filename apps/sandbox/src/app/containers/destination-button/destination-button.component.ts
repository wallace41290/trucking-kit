import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TkDestinationButtonComponent } from '@shared/ui';

@Component({
  selector: 'sandbox-destination-button',
  standalone: true,
  imports: [CommonModule, TkDestinationButtonComponent],
  templateUrl: './destination-button.component.html',
  styleUrl: './destination-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestinationButtonComponent {}
