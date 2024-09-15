import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'tk-info-pill',
  standalone: true,
  imports: [],
  templateUrl: './info-pill.component.html',
  styleUrl: './info-pill.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TkInfoPillComponent {}
