import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Food} from 'src/app/models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private dbPath = '/food';
  foodRef: AngularFirestoreCollection<Food>;

  constructor(
    private db: AngularFirestore
  ) {
    this.foodRef = db.collection(this.dbPath);
  }

  getAllFood(): any {
    return this.foodRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc: any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewDish(food: Food): any {
    return new Observable(obs => {
      this.foodRef.add({...food}).then(() => {
        obs.next();
      })
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.foodRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }


  update(food: Food) {
    return new Observable(obs => {
      this.foodRef.doc(food.id).update(food);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`food/${id}`).delete();
  }
}
