import { NgModule } from '@angular/core';
import { ZorroModule } from './zorro/zorro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ZorroModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ZorroModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {
}
