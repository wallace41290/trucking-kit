import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sandbox-destination-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination-link.component.html',
  styleUrl: './destination-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestinationLinkComponent {}
