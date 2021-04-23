import { Component, OnInit } from '@angular/core';
import {IpcService} from '../../../services/ipc.service';

@Component({
  selector: 'winmenu',
  templateUrl: './winmenu.component.html',
  styleUrls: ['./winmenu.component.css']
})
export class WinmenuComponent implements OnInit {

  constructor(private ipcService: IpcService) { 
  }

  ngOnInit(): void {
  }

  closeApp(){
    this.ipcService.send("closeApp")
  }
  minApp(){
    this.ipcService.send("minApp")
  }
  maxApp(){
    this.ipcService.send("maxApp")
  }

}
