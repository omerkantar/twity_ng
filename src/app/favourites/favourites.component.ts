import { Component, OnInit } from '@angular/core';

import { TweetsService, Tweets } from '../tweets.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  tweets: Tweets;

  constructor(private tweetsService: TweetsService) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.tweetsService.getFavourites().subscribe( res => this.tweets = res, error => { console.log("err", error); });
  }

}
