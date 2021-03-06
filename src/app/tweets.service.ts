import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TweetsService {

  private username:string;

  constructor(private http:Http, private localStorage: LocalStorageService) { }


  getUrl(url:string):string {
    this.username = this.localStorage.get("username").toString();
    return "http://46.101.211.25:5454/user/" + url + "?screen_name=" + this.username
  }

  getTweets(): Observable<Tweets> {
    const url = this.getUrl("tweets");
    return this.http.get(url)
      .map((res:Response) => <Tweets>res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  getFavourites(): Observable<Tweets> {
    const url = this.getUrl("favorites");
    return this.http.get(url)
      .map((res:Response) => <Tweets>res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

}


export class Tweets {
  constructor(
    public hashtags: Hashtag[]
  ) { }
}


export class Hashtag {
  constructor(
    public hashtag: string,
    public count: number
  ) { }
}

