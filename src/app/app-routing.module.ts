import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SuperheroinclusionComponent } from './superheroinclusion/superheroinclusion.component';
import { TimescrollComponent } from './timescroll/timescroll.component';

const routes: Routes = [
  {
    path: 'home',
    component: TimescrollComponent
  },
  {
    path: 'inclusion',
    component: SuperheroinclusionComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
