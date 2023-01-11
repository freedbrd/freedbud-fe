import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MainLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/dashboard/dashboard.module').then(
              m => m.DashboardModule),
          },
        ],
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})
export class MainLayoutRoutingModule {
}
