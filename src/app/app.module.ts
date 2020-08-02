import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DatatableComponent } from './datatable/datatable.component';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DatatableComponent,
    HeaderComponent,
    FooterComponent,
    UpdateBookComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
       FormsModule, BrowserAnimationsModule,
       MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
