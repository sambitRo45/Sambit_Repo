import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { StudentModule } from './student/student-module';
import { RouterModule } from '@angular/router';
import { Bus } from './bus/bus';

@NgModule({
  declarations: [
    App,
    Bus
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    RouterModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
