import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import * as io from 'socket.io-client';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class LiveService {
  private name: string;
  private url: string = "http://localhost:5454";
  private socket;

  constructor() { }

  getTweet(name: string): Observable<any> {
    this.name = name;

    let observable = new Observable(observer => {

      this.socket = io.connect(this.url);

      this.socket.emit("me", name);

      this.socket.on("me", (data) => {
        console.log('socket on data', data);
        observer.next(data);
      });
        return () => {
          this.socket.disconnect();
        }
    });

    return observable
  }


  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
