import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
