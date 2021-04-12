import { Component, OnInit } from '@angular/core';
import { fileService } from '../../services/fileService.service';
import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css'],

})

export class UploadFormComponent implements OnInit {
  public uploading: boolean = false;
  public uploadProgress:number;
  constructor(
    private _fileService: fileService,
  ) { }
  files: Array<File> = [];
  onSubmit() {
    this._fileService.uploadFile(this.files).subscribe(
      event => {
        this.uploading = true;
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round((event.loaded / event.total * 100))
          console.log("Upload Progress: " + this.uploadProgress)
        }
        else if (event.type === HttpEventType.Response) {
          console.log(event)
          this.uploading = false;
        }
      }
    )

  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element)
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }
  ngOnInit(): void {
  }
}
