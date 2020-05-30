import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PizzaService } from '../services/pizza.service';
import Pizza from '../models/Pizza';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
})
export class PanierComponent implements OnInit {
  @Input() public panier: Pizza[];

  constructor(private modalController: ModalController, private pizzaService: PizzaService) {
    this.panier = [];
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  addQuantity(myPizzaId: number) {
    this.pizzaService.addPizzaQuantity(myPizzaId);
  }

  removeQuantity(myPizzaId: number) {
    this.pizzaService.removePizzaQuantity(myPizzaId);
  }

  razPizzaToBuy(id: number) {
    console.log('ID de la pizza : ' + id);
    this.pizzaService.deletePizzaToCard(this.panier.find(value => value.id === id));
  }

  ngOnInit() {}

}
