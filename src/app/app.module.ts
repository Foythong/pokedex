import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { CardSearchComponent } from './card-search/card-search.component';
// import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    CardSearchComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CardSearchComponent
  ]
})
export class AppModule { }
