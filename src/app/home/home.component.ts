import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, User } from '../user.service';
import { TweetsComponent } from '../tweets/tweets.component';
import { LiveComponent } from '../live/live.component';

import { SingleUser } from '../user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TweetsComponent, LiveComponent]
})

export class HomeComponent implements OnInit {

  username: string;
  user: User;

  constructor(private userService: UserService, private router: Router) {
    this.username = SingleUser.getInstance().name;
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
    SingleUser.getInstance().name = "";
    this.router.navigate(['/']);
  }
}


