import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbStepperModule } from '@nebular/theme';

import { NebularStepperComponent } from '../../components/nebular-stepper/nebular-stepper.component';
import { NebularFlipCardComponent } from '../../components/nebular-flip-card/nebular-flip-card.component';
import { HomeComponent } from '../../components/home/home.component';

@NgModule({
  imports: [
    CommonModule,    
    RouterModule,
    NbLayoutModule,
    NbStepperModule
  ],
  declarations: [
    HomeComponent,
    NebularFlipCardComponent,
    NebularStepperComponent
  ]
})
export class NebularControllersModule { }
