import { Component, OnInit } from '@angular/core';
import { BusService } from './bus.service';
import { IBusService } from "../interfaces/busServicesInterface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'teste-pagmob-frontend';
  constructor(private busService: BusService){}

  async ngOnInit() {
    await this.getBusServices();
  }

  async getBusServices(){
    const service = await this.busService.obterServices();
    console.log("servicesData", service);
  }
}
