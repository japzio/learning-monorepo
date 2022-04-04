import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: string = uuidv4().toString();
  serverStatus: string = 'offline';

  constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {

  }

  getServerId(): string {
    return this.serverId;
  }

  getServerStatus(): string {
    console.log(this.serverStatus)
    return this.serverStatus;
  }

}
