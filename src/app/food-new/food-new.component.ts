import { Component, OnInit } from '@angular/core';
import {Food} from "../models/food.model";
import {FoodService} from "../services/food/food.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-food-new',
  templateUrl: './food-new.component.html',
  styleUrls: ['./food-new.component.scss']
})
export class FoodNewComponent implements OnInit {
  new: boolean = false;

  public food!: Food;
  constructor(
    private Food: FoodService,
  private router: Router
  ) { }

  ngOnInit(): void {
    this.food = new Food();
  }
  add(){
    this.Food.saveNewDish(this.food).subscribe(() =>{
      this.food = new Food();
      this.new = true;
      setTimeout(() => {
        this.new = false;
        this.router.navigate(['/food']);
      }, 2000);

    })
  }
}
