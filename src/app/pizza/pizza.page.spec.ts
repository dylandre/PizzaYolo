import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzaPage } from './pizza.page';

describe('PizzaPage', () => {
  let component: PizzaPage;
  let fixture: ComponentFixture<PizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
