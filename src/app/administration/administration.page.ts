import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../services/pizza.service';
import Pizza from '../models/Pizza';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss'],
})
export class AdministrationPage implements OnInit {

  pizza: Pizza[];
  error: string;
  loading = false;
  delete = false;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
      this.pizzaService.getAllPizza().subscribe(
          pizzas => this.pizza = pizzas,
          error => {
              this.error = error;
              this.loading = false;
          },
          () => this.loading = true
      );
  }

  deleteOnePizza(id: number) {
    this.pizzaService.deletePizza(id).subscribe(
        value => this.delete = value,
        error1 => {
          this.error = error1;
          this.loading = false;
        },
        () => this.loading = true
    );
  }
}
