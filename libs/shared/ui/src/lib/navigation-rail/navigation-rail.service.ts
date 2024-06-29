import { Injectable } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { BehaviorSubject } from 'rxjs';

/**
 * A configuration for setting the primary action button of the rail.
 */
export interface NavigationButtonConfig {
  icon: string;
  ariaLabel: string;
  action: () => void;
  color?: ThemePalette;
}

/**
 * A service for interacting with the NavigationRail
 */
@Injectable({ providedIn: 'root' })
export class NavigationRailService {
  private _actionButton = new BehaviorSubject<
    NavigationButtonConfig | undefined
  >(undefined);
  public actionButton$ = this._actionButton.asObservable();

  /** Resets the primary action. */
  resetAction() {
    this._actionButton.next(undefined);
  }

  /**
   * Sets the primary action of the rail.
   * @param config A configuration of properties used by the FAB.
   */
  setAction(config: NavigationButtonConfig | undefined) {
    this._actionButton.next(config);
  }
}
