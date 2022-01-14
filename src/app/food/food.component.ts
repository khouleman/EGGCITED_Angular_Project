import {Component, Input, OnInit} from '@angular/core';
import {FoodService} from "../services/food/food.service";
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  suppri: boolean = false;

  @Input() foodName?: string;
  @Input() foodPicture?: string;
  @Input() foodCountry?: string;
  @Input() foodCategory?: string;
  @Input() foodCreator?: string;
  @Input() foodReleaseDate?: string;
  @Input() foodDescription?: string;
  @Input() foodIngredients?: string;
  @Input() foodTimePreparation?: string;
  @Input() id?: string ;

  constructor( private Food: FoodService,
               private router: Router) { }

  ngOnInit(): void {
  }


  suppr(){
    if(confirm("Are you sure to remove ?")) {
      this.suppri = true;
        this.suppri = false;
        this.Food.delete(this.id)
    } else {
      this.router.navigate(['/food']);
    }



  }
}
