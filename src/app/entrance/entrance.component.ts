import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SingleUser } from '../user.service';


@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {

  username: string;

  constructor(private router: Router) { }

  ngOnInit() {
    SingleUser.getInstance().name = "";
  }

  clicked(event) {
    SingleUser.getInstance().name = this.username;
    this.router.navigate(['/home']);
  }

}
