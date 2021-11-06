import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './data/services/authguard.service';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { ContentlayoutComponent } from './layout/contentlayout/contentlayout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentlayoutComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    component: ContentlayoutComponent,
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'admin/dashboard',
    component: AdminlayoutComponent,
    loadChildren: () =>
      import('./modules/admin/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthguardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
