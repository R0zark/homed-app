import { Component, OnInit, Input } from '@angular/core';
import {DFile} from '../../models/file';
import {fileService} from '../../services/fileService.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[
    fileService
  ]
})
export class HomeComponent implements OnInit {


  @Input()
  fileId;

  filesArray : Array<DFile>;
  constructor(
    private _fileService: fileService) {
    
    this.filesArray = []
   }
  ngOnInit(): void {
    this.loadfiles();
  }
  loadfiles(){
    this._fileService.getFiles().subscribe(
      result =>{
        for (let element in result) {
          this.filesArray.push(new DFile(result[element].id,
            result[element].name,result[element].extension,result[element].capacity,true))
          }
    },
    error =>{
     alert(error)
    })
  }
  deleteFile(id:number){
    this.filesArray = this.filesArray.filter(file => file.id != id)
  }
}
