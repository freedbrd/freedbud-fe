import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
  ],
})
export class ZorroModule {
}
