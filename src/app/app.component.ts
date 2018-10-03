import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PusherService } from './pusher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Pusher Realtime Notifications';
  claps: any =  0;
  
  // send like increment to server
  Applause() {
    
    
    this.claps = parseInt(this.claps, 10) + 1;
    this.pusherService.clap( this.claps );
  }

  constructor(private pusherService: PusherService) {
  }

  ngOnInit() {
    this.pusherService.channel.bind('new-event', data => {
      this.claps = data.claps ;
    });
  }


}
