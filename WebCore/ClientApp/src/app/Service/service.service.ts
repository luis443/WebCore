import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentDetail } from '../Modelo/PaymentDetail';
@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:50152/api/Orders';

  getPersonas() {
    return this.http.get<PaymentDetail[]>(this.Url);
  }
  getPersonaId(id: number) {
    return this.http.get<PaymentDetail>(this.Url + "/" + id);
  }

  createPersonas(PaymentDetail: PaymentDetail) {
    return this.http.post<PaymentDetail>(this.Url, PaymentDetail);
  }
  UpdatePersonas(PaymentDetail: PaymentDetail) {
    return this.http.put<PaymentDetail>(this.Url, PaymentDetail);
  }
  DeletePersona(PaymentDetail: PaymentDetail) {
    console.log("Servicio", PaymentDetail);
    return this.http.delete<PaymentDetail>(this.Url + "/" + PaymentDetail.OrderID);
  }


}
