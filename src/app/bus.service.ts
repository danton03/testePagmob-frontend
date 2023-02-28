import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment';
import { IApiData, IBusService } from 'src/interfaces/busServicesInterface';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class BusService {
  busServicesData: IBusService[];

  constructor() {
    this.busServicesData = [];
  }

  async obterServices(){
    const res = await axios.get(API_URL)
    const data: IApiData = await res.data;
    this.busServicesData = data.services;
    return this.busServicesData; 
  }

}
