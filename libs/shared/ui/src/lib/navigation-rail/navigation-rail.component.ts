import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { TkLogoModule } from '../logo';
import { TkDestinationLinkComponent } from '../destination-link';
import { TkDestination } from './destination.model';
import { TkNavigationRailService } from './navigation-rail.service';
import { TkDestinationButtonComponent } from '../destination-button';

@Component({
  selector: 'tk-navigation-rail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    TkDestinationButtonComponent,
    TkDestinationLinkComponent,
    TkLogoModule,
  ],
  templateUrl: './navigation-rail.component.html',
  styleUrl: './navigation-rail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TkNavigationRailComponent {
  /** Whether the rail is visible. */
  @Input()
  get opened() {
    return this._opened;
  }
  set opened(value: BooleanInput) {
    this._opened = coerceBooleanProperty(value);
  }
  private _opened = false;

  /** Whether the logout button should be shown. Defaults to true. */
  @Input()
  get enableLogout() {
    return this._enableLogout;
  }
  set enableLogout(value: BooleanInput) {
    this._enableLogout = coerceBooleanProperty(value);
  }
  private _enableLogout = true;

  /** The destinations to show in the rail. */
  @Input() destinations: TkDestination[] = [];

  /** Emitted when the logout button is clicked. */
  @Output() logout = new EventEmitter<void>();

  protected railService = inject(TkNavigationRailService);
}
