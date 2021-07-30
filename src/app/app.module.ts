import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularProModule } from './angularPro.module';

@NgModule({
  imports: [
    BrowserModule,
    AngularProModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
