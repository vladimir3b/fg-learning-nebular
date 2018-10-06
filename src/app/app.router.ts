import { Route } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NebularStepperComponent } from "./components/nebular-stepper/nebular-stepper.component";
import { NebularFlipCardComponent } from "./components/nebular-flip-card/nebular-flip-card.component";


export const APP_ROUTES: Array<Route> = [
  { 
    path: '', 
    component: HomeComponent
  },
  {
    path: 'stepper',
    component: NebularStepperComponent
  },
  {
    path: 'flip-card',
    component: NebularFlipCardComponent
  }
];