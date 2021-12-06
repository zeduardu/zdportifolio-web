import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthguardService} from './data/services/authguard.service';
import {AdminlayoutComponent} from './layout/adminlayout/adminlayout.component';
import {ContentlayoutComponent} from './layout/contentlayout/contentlayout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentlayoutComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path:'public',
    component: ContentlayoutComponent,
    loadChildren: () => import('./modules/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'abouttechnology',
    component: ContentlayoutComponent,
    loadChildren: () =>
      import('./modules/sobre-tecnologia/sobre-tecnologia.module').then(
        (m) => m.SobreTecnologiaModule
      ),
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
    canActivate: [AuthguardService],
  },
  {
    path: 'admin/post/categories',
    component: AdminlayoutComponent,
    loadChildren: () =>
      import('./modules/admin/postcategory/postcategory.module').then(
        (m) => m.PostCategoryModule
      ),
    canActivate: [AuthguardService],
  },
  {
    path: 'admin/post/posts',
    component: AdminlayoutComponent,
    loadChildren: () =>
      import('./modules/admin/post/post.module').then((m) => m.PostModule),
    canActivate: [AuthguardService],
  },
  { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
  { path: 'public', loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
