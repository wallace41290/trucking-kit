import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'tk-destination-link',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatRippleModule],
  templateUrl: './destination-link.component.html',
  styleUrl: './destination-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TkDestinationLinkComponent {
  /** Material icon to represent the destination */
  @Input() icon = '';
  /** Text to represent the destination */
  @Input() label = '';
  /** Route to link to */
  @Input() route: string | unknown[] | null | undefined = '';
}
