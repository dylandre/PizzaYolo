import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { ModalController } from '@ionic/angular';
import { PanierComponent } from '../panier/panier.component';
import Pizza from '../models/Pizza';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  counter: number;
  panier: Pizza[];

  constructor(private pizzaService: PizzaService, private modalController: ModalController) { }
    async presentModal() {
        const modal = await this.modalController.create({
            component: PanierComponent
        });
        return await modal.present();
    }
    async presentModalWithData() {
        const modal = await this.modalController.create({
            component: PanierComponent,
            componentProps: {
                panier: this.panier
            }
        });
        return await modal.present().then(_ => {
            console.log('Envoi des données suivante: ', this.pizzaService.panier.getValue());
        });
    }

  ngOnInit() {
    const sub = this.pizzaService.panier.subscribe(value => {
          this.counter = value.length;
          console.log('Mise à jour du bagde');
        });
    this.panier = this.pizzaService.panier.getValue();
  }
}
