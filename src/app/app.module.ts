import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { LocalStorageModule } from 'angular-2-local-storage';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EntranceComponent } from './entrance/entrance.component';

import { UserService } from './user.service';
import { TweetsService } from './tweets.service';
import { TweetsComponent } from './tweets/tweets.component';
import { FavouritesComponent } from './favourites/favourites.component';

const appRoutes: Routes = [
  { path: '', component: EntranceComponent },
  { path: 'home',
    component: HomeComponent,
    children: [
      { path: 'tweets', component: TweetsComponent },
      { path: 'favourites', component: FavouritesComponent }
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntranceComponent,
    TweetsComponent,
    FavouritesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    })
  ],
  providers: [UserService, TweetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
