import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IPizza from '../models/IPizza';
import Pizza from '../models/Pizza';
import {BehaviorSubject, Observable} from 'rxjs';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  pizzaUrl = 'https://api.ynov.jcatania.io/pizza/';

  panier: BehaviorSubject<Pizza[]> = new BehaviorSubject<Pizza[]>([]);

  constructor(private http: HttpClient) {}

  getAllPizza(): Observable<Pizza[]> {
    return this.http.get<IPizza[]>(this.pizzaUrl);
  }

  addPizzaToCard(myPizza: Pizza) {
    const tmp = this.panier.getValue();
    tmp.push(myPizza);
    this.panier.next(this.panier.getValue());
  }

  deletePizzaToCard(myPizza: Pizza) {
    const index = this.panier.getValue().indexOf(myPizza);
    this.panier.getValue().splice(index, 1);
    this.panier.next(this.panier.getValue());
  }

  createPizza(newPizza: Pizza) {
    return this.http.post(this.pizzaUrl, newPizza);
  }

  changePizza(id: number, body) {
    return this.http.patch(this.pizzaUrl + id, body);
  }

  deletePizza(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.pizzaUrl + id);
  }
}
