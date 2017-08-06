import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { FlightDataComponent } from './flight-data/flight-data.component';

//Services
import { GetFlightInfoService } from './flight-data/get-flight-info.service';

@NgModule({
  declarations: [
    AppComponent,
    FlightDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GetFlightInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
