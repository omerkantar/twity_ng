import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import { LiveService } from '../live.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit, OnDestroy {

  list;
  connection;
  username: string;

  constructor(private liveService: LiveService, private localStorage: LocalStorageService) {
    this.username = localStorage.get('username').toString();

  }

  ngOnInit() {

    if (this.list == null) {
      this.list = new Array();
    }
    if (this.username) {
      this.connection = this.liveService.getTweet(this.username).subscribe(data => {
        this.list.push(data);
      });
    }
  }

  ngOnDestroy() {
    this.liveService.disconnect()
  }



}
