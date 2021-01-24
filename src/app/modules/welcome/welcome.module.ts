import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule, WelcomeRoutingComponents } from './welcome-routing.module';


@NgModule({
  declarations: [WelcomeRoutingComponents],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
