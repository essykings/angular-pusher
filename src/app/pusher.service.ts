declare const Pusher: any;
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PusherService {
  pusher: any;
  channel: any;

 
  constructor(private http: HttpClient) {
    this.pusher = new Pusher(environment.pusher.key);
    this.channel = this.pusher.subscribe('my_channel');
  }


  clap( claps_count ) {
    this.http.get(`http://localhost:3000/add/${claps_count}`)
    .subscribe();
  }
}

