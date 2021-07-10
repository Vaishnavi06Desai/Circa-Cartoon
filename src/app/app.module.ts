import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimescrollComponent } from './timescroll/timescroll.component';
import { SuperheroinclusionComponent } from './superheroinclusion/superheroinclusion.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CreatestoryComponent } from './createstory/createstory.component';

@NgModule({
  declarations: [
    AppComponent,
    TimescrollComponent,
    SuperheroinclusionComponent,
    SignupComponent,
    SigninComponent,
    CreatestoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
