import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenubarModule} from 'primeng/menubar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CardContainerComponent } from './shared/card-container/card-container.component';
import { InputTypeaheadComponent } from './shared/input-typeahead/input-typeahead.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardContainerComponent,
    InputTypeaheadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    MegaMenuModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
