import { BooleanInput } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
} from '@angular/core';

import { TkLogoColor } from './color.model';

@Component({
  selector: 'tk-logo',
  templateUrl: 'logo.component.svg',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TkLogoComponent {
  static ngAcceptInputType_color: TkLogoColor | undefined | null;
  static ngAcceptInputType_showText: BooleanInput;

  /** Theme color for the logo, defaults to 'onBackground' if no value is set. */
  @Input()
  get color(): TkLogoColor {
    return this._color;
  }
  set color(color: TkLogoColor) {
    const newColor = color || 'onBackground';

    // Add or remove the css class depending on color palette
    if (newColor !== this._color) {
      if (this._color) {
        this._elementRef.nativeElement.classList.remove(
          `trucking-kit-${this._color}`
        );
      }
      if (newColor) {
        this._elementRef.nativeElement.classList.add(
          `trucking-kit-${newColor}`
        );
      }
    }
    this._color = color || 'onBackground';
  }
  // Can non-null assert do to calling the setter in the constructor
  private _color!: TkLogoColor;

  constructor(private _elementRef: ElementRef) {
    this.color = 'onBackground';
  }
}
