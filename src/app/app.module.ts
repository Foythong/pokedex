import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardSearchComponent } from './card-search/card-search.component';
import { CardModalComponent } from './card-modal/card-modal.component';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ShowCardComponent } from './show-card/show-card.component';




@NgModule({
  declarations: [
    AppComponent,
    CardSearchComponent,
    CardModalComponent,
    ShowCardComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    DynamicDialogModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CardSearchComponent,
    CardModalComponent,
    DynamicDialogModule,
    ShowCardComponent,

  ]
})
export class AppModule { }
