import {Component, OnInit} from '@angular/core';
import {FoodService} from "../services/food/food.service";
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'app-food-modif',
  templateUrl: './food-modif.component.html',
  styleUrls: ['./food-modif.component.scss']
})
export class FoodModifComponent implements OnInit {
  food: any = null;
  change: boolean = false;

  constructor(
    private Food: FoodService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Food.get(id).subscribe((value: any) => {
      this.food = value;
    });
  }

  modif() {
    this.Food.update(this.food).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
        this.router.navigate(['/food']);
      }, 2000);
    })
  }

}
