import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { FlightDataComponent } from './flight-data/flight-data.component';
import { DisplayListFlightsComponent } from './display-list-flights/display-list-flights.component';

//Services
import { GetFlightInfoService } from './services/get-flight-info.service';

@NgModule({
  declarations: [
    AppComponent,
    FlightDataComponent,
    DisplayListFlightsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [GetFlightInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
