import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { FormsModule } from "@angular/forms";
import {FilmService} from "./services/film/film.service";
import { FilmListComponent } from './film-list/film-list.component';
import { FilmModifComponent } from './film-modif/film-modif.component';
import { FilmNewComponent } from './film-new/film-new.component';
import { HomeComponent } from './home/home.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {environment} from "../environments/environment";
import { FoodComponent } from './food/food.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodModifComponent } from './food-modif/food-modif.component';
import { FoodNewComponent } from './food-new/food-new.component';
import {FoodService} from "./services/food/food.service";


@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmListComponent,
    FilmModifComponent,
    FilmNewComponent,

    HomeComponent,

    FoodComponent,
    FoodListComponent,
    FoodModifComponent,
    FoodNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    FoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
