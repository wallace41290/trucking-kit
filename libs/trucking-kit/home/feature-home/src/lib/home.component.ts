import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tk-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
