import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PizzaService } from '../services/pizza.service';
import Pizza from '../models/Pizza';
import Ingredients from '../models/Ingredients';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() public onePizza: Pizza;
  oneIngredients: Ingredients;
  allIngredients: Ingredients[];
  error: string;
  loading = false;

  constructor(private modalController: ModalController, private pizzaService: PizzaService) {
    this.allIngredients = [];
  }
  async closeModal() {
    await this.modalController.dismiss();
  }

  ngOnInit() {
    this.onePizza.ingredients.forEach(value => this.pizzaService.getIngredientsById(value).subscribe(
        ingredients => this.oneIngredients = ingredients,
        error => {
          this.error = error;
          this.loading = false;
        },
        () => {
          this.loading = true;
          console.log(this.oneIngredients);
          this.allIngredients.push(this.oneIngredients);
        }
    ));
  }
}
