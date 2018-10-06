import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbStepperModule, NbLayoutModule } from '@nebular/theme';
import { MyCompComponent } from './my-comp/my-comp.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbStepperModule
  ],
  declarations: [MyCompComponent]
})
export class MyModuleModule { }