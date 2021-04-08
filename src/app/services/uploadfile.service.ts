import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadfileService {

  uploadurl = 'http://localhost:8000/upload'
  constructor(
    private HttpClient: HttpClient
  ) { }

  uploadFile(formData): Observable<any> {
    let form = new FormData();
    for(let element in formData){
      form.append('file',formData[element],formData[element].name);
    }
    return this.HttpClient.post<any>(this.uploadurl, form, {
      reportProgress: true,
      observe: 'events'
    })

  }

}
