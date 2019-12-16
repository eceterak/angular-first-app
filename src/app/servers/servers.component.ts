import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`
    .white {
      color: white;
    }
  `]
})
export class ServersComponent implements OnInit {

  allowNewServers = false;
  serverCreationStatus = 'No server was created';
  serverName: string = 'Test 123';
  username: string;
  serverCreated = false;
  servers = ['Holis', 'Delias'];
  showParagraph = false;
  showParagraphLog: Array<Date> = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. The server name is: ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerEvent(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  allowResetUsername() {
    return !! this.username;
  }

  onResetUsername() {
    this.username = '';
  }

  toggleParagraph() {
    this.showParagraph = !this.showParagraph;
    this.showParagraphLog.push(new Date());
  }

  getBackgroundColor(i) {
    if(i >= 4) { return 'blue'; }
  }

}
