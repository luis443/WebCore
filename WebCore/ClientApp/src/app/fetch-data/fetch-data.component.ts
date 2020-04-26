import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentDetail } from '../Modelo/PaymentDetail';
import { ServiceService } from '../Service/service.service';
@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: PaymentDetail[];
  //public service: ServiceService;
  constructor(private service: ServiceService,http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.service.getPersonas().subscribe(data => {
        this.forecasts = data;
        console.log(this.forecasts);
      })

  }

  public Editar(forecast: PaymentDetail) {
    console.log("entro en editar", forecast);
    this.service.UpdatePersonas(forecast).subscribe(data => {
      console.log(data);
    })
  }

  public eliminar(forecast: PaymentDetail) {

    console.log("entro en editar", forecast);
    this.service.DeletePersona(forecast).subscribe(data => {
      console.log(data);
    })
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
//interface PaymentDetail {
//  ShipName: string;
//  ShipAddress: number;
//  OrderID: number;
//  ShipCity: string;
//}
