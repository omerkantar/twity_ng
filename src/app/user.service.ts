import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class UserService {

  constructor (private http: Http) {

  }


  getUrl(url: string, username: string): string {
    return "http://46.101.211.25:5454/user/" + url + "?screen_name=" + username
  }

  getUser(username: string): Observable<User> {
    const url = this.getUrl("me", username);
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


export class SingleUser {
  private static _instance: SingleUser = new SingleUser();
  name: string;

  constructor() {
    if(SingleUser._instance){
      throw new Error("Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.");
    }
    SingleUser._instance = this;
  }

  public static getInstance(): SingleUser {
    return SingleUser._instance;
  }
}

