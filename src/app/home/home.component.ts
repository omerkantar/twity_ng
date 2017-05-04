import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

import { TweetsComponent } from '../tweets/tweets.component';
import { LiveComponent } from '../live/live.component';

import { User, UserService } from '../user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TweetsComponent, LiveComponent]
})

export class HomeComponent implements OnInit {

  username: string;
  user: User;

  constructor(private userService: UserService, private router: Router, private localStorage: LocalStorageService) {
    this.username = localStorage.get('username').toString();
    if (this.username == null || this.username == "") {
      this.clickBack()
    }
  }

  ngOnInit() {
    this.loadUser()
  }

  loadUser() {
    this.userService.getUser(this.username).subscribe( res => this.user = res, error => { console.log("err", error); });
  }

  clickBack() {
    this.localStorage.set("username", "");
    this.router.navigate(['/']);
  }
}


