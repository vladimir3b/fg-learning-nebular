import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbThemeModule, NbStepperModule, NbLayoutModule } from '@nebular/theme';

import { AppComponent } from './app.component';
import { NebularControllersModule } from './modules/nebular-controllers/nebular-controllers.module';
import { NebularStepperComponent } from './components/nebular-stepper/nebular-stepper.component';
import { NebularFlipCardComponent } from './components/nebular-flip-card/nebular-flip-card.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,    
    NebularControllersModule,
    RouterModule.forRoot([{ path: '', component: NebularStepperComponent }]),
    NbLayoutModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbStepperModule
    ],
  declarations: [ AppComponent, NebularFlipCardComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
