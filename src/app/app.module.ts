import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbThemeModule, NbStepperModule } from '@nebular/theme';


import { APP_ROUTES } from './app.router';
import { NebularControllersModule } from './modules/nebular-controllers/nebular-controllers.module';
import { HomeComponent } from './components/home/home.component';
import { NebularStepperComponent } from './components/nebular-stepper/nebular-stepper.component';
import { NebularFlipCardComponent } from './components/nebular-flip-card/nebular-flip-card.component';
import { RootComponent } from './components/root/root.component';

import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,    
    NebularControllersModule,
    RouterModule.forRoot([ ...APP_ROUTES ]),
    NbLayoutModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbStepperModule
    ],
  declarations: [ RootComponent ],
  bootstrap:    [ RootComponent ]
})
export class AppModule { }
