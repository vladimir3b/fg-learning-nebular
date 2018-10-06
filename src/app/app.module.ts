import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbThemeModule, NbStepperModule, NbLayoutModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { MyModuleModule } from './my-module/my-module.module';
import { MyCompComponent } from './my-module/my-comp/my-comp.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    MyModuleModule,
    RouterModule.forRoot([{ path: '', component: MyCompComponent }]),
    NbLayoutModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbStepperModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
