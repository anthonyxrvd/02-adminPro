import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//MODULOS
import { PagesRoutingModule } from './pages/pages.routing';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  //path: '/dasboard' PagesRoutingModule
  //path: '/auth' AuthRoutingModule
  
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
