import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class fileService {

  url = 'URLHERE/'
  constructor(
    private HttpClient: HttpClient
  ) { }


  deleteFile(id):Observable<any> {
    return this.HttpClient.get<any>(this.url + 'delete/' + id)
  }

  uploadFile(formData): Observable<any> {
    let form = new FormData();
    for (let element in formData) {
      form.append('file', formData[element], formData[element].name);
    }
    return this.HttpClient.post<any>(this.url + 'upload', form, {
      reportProgress: true,
      observe: 'events'
    })

  }
  downloadFile(id): Observable<any> {
    const requestOptions: Object = {
      responseType: 'blob'
    }
    return this.HttpClient.get<any>(this.url + 'file/' + id, requestOptions)
  }

  getFiles(): Observable<any> {
    return this.HttpClient.get<any>(this.url + 'files')
  }

}
