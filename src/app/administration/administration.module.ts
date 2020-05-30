import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrationPageRoutingModule } from './administration-routing.module';

import { AdministrationPage } from './administration.page';
import {HomePageModule} from '../home/home.module';
import {PizzaService} from '../services/pizza.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AdministrationPageRoutingModule,
        HomePageModule
    ],
    declarations: [AdministrationPage],
    providers: [PizzaService]
})
export class AdministrationPageModule {}
