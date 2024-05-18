import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { TkLogoModule } from '../logo';

@Component({
  selector: 'tk-navigation-rail',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    TkLogoModule,
  ],
  templateUrl: './navigation-rail.component.html',
  styleUrl: './navigation-rail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TkNavigationRailComponent {
  @Input()
  get opened() {
    return this._opened;
  }
  set opened(value: BooleanInput) {
    this._opened = coerceBooleanProperty(value);
  }
  private _opened = false;
}
