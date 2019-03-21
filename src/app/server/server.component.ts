import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { 
  this.serverStatus = Math.random() >0.5 ?'offline': 'online';

  }

  ngOnInit() {
  }

  serverID: number = 10;
  serverStatus: String = 'offline';
  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === "online" ? "green" : "red";
  }

}
