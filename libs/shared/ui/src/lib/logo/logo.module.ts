import { NgModule } from '@angular/core';

import { TkHorzLogoComponent } from './horz-logo.component';
import { TkIconLogoComponent } from './icon-logo.component';
import { TkLogoComponent } from './logo.component';

@NgModule({
  imports: [],
  declarations: [TkLogoComponent, TkIconLogoComponent, TkHorzLogoComponent],
  exports: [TkLogoComponent, TkIconLogoComponent, TkHorzLogoComponent],
})
export class TkLogoModule {}
