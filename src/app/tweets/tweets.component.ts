import { Component, OnInit } from '@angular/core';

import { TweetsService, Tweets } from '../tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets: Tweets;


  constructor(private tweetsService: TweetsService) { }

  ngOnInit() {
      this.loadData()
  }

  loadData() {
    this.tweetsService.getTweets().subscribe( res => this.tweets = res, error => { console.log("err", error); });
  }
}
