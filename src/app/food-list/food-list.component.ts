import { Component, OnInit } from '@angular/core';
import {FoodService} from "../services/food/food.service";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  foods!:any;
  constructor(
    private Food: FoodService
  ) {}

  ngOnInit(): void {
    this.Food.getAllFood().subscribe((data: any) => {
      this.foods = data;
    });
  }
}
