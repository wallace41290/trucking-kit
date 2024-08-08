import { Injectable } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { BehaviorSubject } from 'rxjs';

/**
 * A configuration for setting the primary action button of the rail.
 */
export interface TkNavigationButtonConfig {
  icon: string;
  tooltip: string;
  action: () => void;
  color?: ThemePalette;
}

/**
 * A service for interacting with the NavigationRail
 */
@Injectable({ providedIn: 'root' })
export class TkNavigationRailService {
  private _actionButton = new BehaviorSubject<
    TkNavigationButtonConfig | undefined
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
  setAction(config: TkNavigationButtonConfig | undefined) {
    this._actionButton.next(config);
  }
}
