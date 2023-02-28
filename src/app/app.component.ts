import { Component } from '@angular/core';
import { BusService } from './bus.service';
import { IBusService } from "../interfaces/busServicesInterface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'teste-pagmob-frontend';
  constructor(private busService: BusService){}
  getBusServices(){
    const servicesData = this.busService.obterServices()
    console.log(servicesData);
  }
}
