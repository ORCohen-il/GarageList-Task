import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { Areas } from 'src/assets/models/areas';
import { GarageResponse } from 'src/assets/models/garage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceRepository {
  constructor(private httpClient: HttpClient) {}

  getAreas() {
    return this.httpClient.post<Areas>(`${environment.listOfAreas_URL}`, {});
  }

  getGarageList(City?: string, Area?: string): Observable<any> {
    let params = {
      City: City ? City : '',
      Area: Area ? Area : '',
    };

    return this.httpClient.post<GarageResponse>(
      `${environment.garagesList_URL}`,
      {},
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': '*',
        }),
        withCredentials: true,
        params: params,
      }
    );
  }
}
