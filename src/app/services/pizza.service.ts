import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IPizza from '../models/IPizza';
import Pizza from '../models/Pizza';
import {BehaviorSubject, Observable} from 'rxjs';
import Ingredients from '../models/Ingredients';
import Iingredients from '../models/Iingredients';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  pizzaUrl = 'https://api.ynov.jcatania.io/pizza/';
  ingredientUrl = 'https://api.ynov.jcatania.io/ingredient/';

  panier: BehaviorSubject<Pizza[]> = new BehaviorSubject<Pizza[]>([]);

  constructor(private http: HttpClient) {}

  getAllPizza(): Observable<Pizza[]> {
    return this.http.get<IPizza[]>(this.pizzaUrl);
  }

  getAllIngredients(): Observable<Ingredients[]> {
    return this.http.get<Iingredients[]>(this.ingredientUrl);
  }

  getIngredientsById(id: number): Observable<Ingredients> {
    console.log(id);
    return this.http.get<Iingredients>(this.ingredientUrl + id);
  }

  addPizzaToCard(myPizza: Pizza) {
    const tmp = this.panier.getValue();
    if (tmp.includes(myPizza) === true) {
      tmp.find(value => value === myPizza).quantity += 1;
    } else {
      myPizza.quantity = 1;
      tmp.push(myPizza);
    }
    this.panier.next(this.panier.getValue());
  }

  deletePizzaToCard(myPizza: Pizza) {
    const index = this.panier.getValue().indexOf(myPizza);
    this.panier.getValue().splice(index, 1);
    this.panier.next(this.panier.getValue());
  }

  addPizzaQuantity(myPizzaId: number) {
    const tmp = this.panier.getValue();
    tmp.find(value => value.id === myPizzaId).quantity += 1;
    this.panier.next(this.panier.getValue());
  }

  removePizzaQuantity(myPizzaId: number) {
    const tmp = this.panier.getValue();
    if (tmp.find(value => value.id === myPizzaId).quantity > 1) {
      tmp.find(value => value.id === myPizzaId).quantity -= 1;
    } else {
      this.deletePizzaToCard(tmp.find(value => value.id === myPizzaId));
    }
  }

  deletePizza(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.pizzaUrl + id);
  }
}
