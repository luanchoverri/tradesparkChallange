import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { MainPageComponent } from './main-page/main-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CategoryChipComponent } from './category-chip/category-chip.component';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';



@NgModule({
  declarations: [
    AppComponent,
    BookStoreComponent,
    MainPageComponent,
    CategoryChipComponent,
    AddBookFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
