import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaPageRoutingModule } from './pizza-routing.module';

import { PizzaPage } from './pizza.page';
import {HomePageModule} from '../home/home.module';
import {PizzaService} from '../services/pizza.service';
import { PanierComponent } from '../panier/panier.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PizzaPageRoutingModule,
        HomePageModule
    ],
    declarations: [PizzaPage, PanierComponent],
    entryComponents: [PanierComponent],
    providers: [PizzaService]
})
export class PizzaPageModule {}
