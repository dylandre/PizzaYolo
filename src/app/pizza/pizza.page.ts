import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import Pizza from '../models/Pizza';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.page.html',
  styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {

  pizza: Pizza[];
  error: string;
  loading = false;

  constructor(private pizzaService: PizzaService, private modalController: ModalController) {
    this.pizzaService.getAllPizza().subscribe(
        pizzas => this.pizza = pizzas,
        error => {
          this.error = error;
          this.loading = false;
        },
        () => this.loading = true
    );
  }
    async presentModalWithData(id: number) {
        const modal = await this.modalController.create({
            component: DetailsComponent,
            componentProps: {
                onePizza: this.pizza.find(value => value.id === id)
            }
        });
        return await modal.present();
    }

  ngOnInit() {}

  addPizzaToBuy(id: number) {
      console.log('ID de la pizza : ' + id);
      this.pizzaService.addPizzaToCard(this.pizza.find(value => value.id === id));
  }
}
