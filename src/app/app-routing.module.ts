import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoodNewComponent} from "./food-new/food-new.component";
import {HomeComponent} from "./home/home.component";
import {FoodModifComponent} from "./food-modif/food-modif.component";
import {FoodListComponent} from "./food-list/food-list.component";

const routes: Routes = [
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
