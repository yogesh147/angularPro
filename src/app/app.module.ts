import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularProModule } from './angularPro.module';
import { HeaderComponent } from './utility/header.component';
import { FooterComponent } from './utility/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularProModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
