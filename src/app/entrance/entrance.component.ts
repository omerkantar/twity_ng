import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {

  username: string;

  constructor(private router: Router, private localStorage: LocalStorageService) {
    this.localStorage.set("username", "");
  }

  ngOnInit() {
    this.localStorage.set("username", "");
  }

  clicked(event) {
    this.localStorage.set("username", this.username);
    this.router.navigate(['/home']);
  }

}
