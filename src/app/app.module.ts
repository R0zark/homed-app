import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { DragDropDirective } from './components/upload-form/drag-drop.directive';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/home/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadFormComponent,
    DragDropDirective,
    CardComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
