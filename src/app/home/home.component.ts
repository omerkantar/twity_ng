import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import { UserService, User } from '../user.service';
import { TweetsComponent } from '../tweets/tweets.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TweetsComponent]
})

export class HomeComponent implements OnInit {

  username: string;
  user: User;

  constructor(private localStorageService: LocalStorageService, private userService: UserService) {

    this.username = localStorageService.get("username").toString();

  }


  ngOnInit() {
    this.loadUser()
  }


  loadUser() {

    this.userService.getUser().subscribe( res => this.user = res, error => { console.log("err", error); });
  }



}


