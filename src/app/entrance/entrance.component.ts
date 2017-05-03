import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {

  username: string;

  constructor(private localStorageService: LocalStorageService, private router: Router) {

  }

  ngOnInit() {

  }

  clicked(event) {

    this.localStorageService.set("username", this.username);

    this.router.navigate(['/home']);

  }

}
