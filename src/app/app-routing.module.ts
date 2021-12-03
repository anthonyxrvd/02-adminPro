import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//MODULOS
import { PagesRoutingModule } from './pages/pages.routing';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [



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
