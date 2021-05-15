import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DFile } from '../../../models/file';
import { fileService } from '../../../services/fileService.service';

@Component({
  selector: 'card-selector',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  item: DFile;

  @Output()
  deleteFile : EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private _fileService: fileService
  ) {
  }

  download(item) {
    this._fileService.downloadFile(item.id).subscribe(
      result => {
        const a = document.createElement('a')
        const objecUrl = URL.createObjectURL(result)
        a.href = objecUrl
        a.download = item.name;
        a.click();
        URL.revokeObjectURL(objecUrl);
      },
      error => {
        alert("Ha habido un error")
      }
    )
  }

  delete(id){
    this._fileService.deleteFile(id).subscribe()
    this.deleteFile.emit(id)
  }

  ngOnInit(): void {
  }

}
