import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmListComponent} from "./film-list/film-list.component";
import {FoodNewComponent} from "./food-new/food-new.component";
import {HomeComponent} from "./home/home.component";
import {AppComponent} from "./app.component";
import {FoodModifComponent} from "./food-modif/food-modif.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {FoodComponent} from "./food/food.component";
import {FoodListComponent} from "./food-list/food-list.component";

const routes: Routes = [
  {
    path:"films",
    component: FilmListComponent
  },
  {
    path:"food",
    component: FoodListComponent
  },
  {
    path:"new",
    component: FoodNewComponent
  },
  {
    path: "modif/:id",
    component: FoodModifComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  declarations:[
  ],
  imports: [
    RouterModule.forRoot(routes)],
  providers: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
