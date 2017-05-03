import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class UserService {

  private username: string;

  constructor (private http: Http, private localStorageService: LocalStorageService) {
    this.username = localStorageService.get('username').toString();
  }

  getUrl(url: string): string {
    return "http://139.59.132.139:5454/user/" + url + "?screen_name=" + this.username
  }

  getUser(): Observable<User> {
    const url = this.getUrl("me");
    return this.http.get(url)
      .map((res: Response) => <User>res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

}

export class User {
  constructor(
    public id: number,
    public name: string,
    public screen_name: string,
    public description: string,
    public profile_image_url_https: string
  ) { }
}


