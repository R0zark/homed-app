import { Component, OnInit } from '@angular/core';
import {DFile} from '../../models/file';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filesArray : Array<DFile>;
  constructor() {
    this.filesArray = []
   }
  ngOnInit(): void {
    for (let index = 0; index < 5 ; index++) {
      this.filesArray.push(new DFile("Fichero " + index,"txt",2000,true));
    }
    this.filesArray.push(new DFile("Fichero doc","doc",2000,true))
    this.filesArray.push(new DFile("Fichero docx","docx",2000,true))
    this.filesArray.push(new DFile("Fichero zip","zip",2000,true))
    this.filesArray.push(new DFile("Fichero js","js",2000,true))
    this.filesArray.push(new DFile("Fichero rar","rar",2000,true))
    //console.log(this.filesArray[0].name)
  }
}
