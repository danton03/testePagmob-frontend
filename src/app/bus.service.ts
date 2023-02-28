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

  obterServices(){
    axios.get(API_URL)
    .then((res => {
      const data: IApiData = res.data;
      this.busServicesData = data.services;
    }))
    .catch(error => {
      console.log("Houve um erro na requisição da API", error);
    })
    return this.busServicesData; 
  }

}
