import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'tk-destination-button',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatRippleModule],
  templateUrl: './destination-button.component.html',
  styleUrl: './destination-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TkDestinationButtonComponent {
  /** Whether the button is disabled */
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  /** Material icon to represent the destination */
  @Input() icon = '';
  /** Text to represent the destination */
  @Input() label = '';

  /** Emitted when the button is clicked */
  @Output() handleClick = new EventEmitter();
}
