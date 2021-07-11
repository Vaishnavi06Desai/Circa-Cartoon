import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatestoryComponent } from './createstory/createstory.component';
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
  },
  {
    path: 'createstory',
    component: CreatestoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
