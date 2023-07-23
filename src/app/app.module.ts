import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ExploreComponent } from './explore/explore.component';
import { DestinationComponent } from './destination/destination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrewComponent } from './crew/crew.component';
import { TECHNOLOGYComponent } from './technology/technology.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    
    AppComponent,
    NavComponent,
    ExploreComponent,
    DestinationComponent,
    CrewComponent,
    TECHNOLOGYComponent,
    RegistrationComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
