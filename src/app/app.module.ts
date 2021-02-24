import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditFormComponent } from './credit-form/credit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
@NgModule({
  declarations: [AppComponent, CreditFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TextMaskModule,
  ],
  providers: [ReactiveFormsModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
