import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName: string = 'Testserver';
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverCreated: boolean = false;
  serversList = ['test server', 'test server 1', 'test server 2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 3000)
   }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    console.log("creating server...");
    this.serverCreationStatus = 'Server was created with name ' + this.serverName;
    this.serverCreated = true;
    this.serversList.push(this.serverName);
    this.serverName = '';
  }

}
