import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'upload-form', component: UploadFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
