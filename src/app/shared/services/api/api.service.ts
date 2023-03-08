import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientProvider } from 'src/app/core/rest-client-provider/rest-client-provider';
import { Cities } from '../../models/interfaces/cities';
import { environment as env } from 'src/environments/environment';
import { AddCity } from '../../models/classes/add-city';
@Injectable({
  providedIn: 'root',
})
export class ApiService extends RestClientProvider {
  constructor(@Inject(HttpClient) public override httpClient: HttpClient) {
    super(httpClient, 'api-1');
  }

  getCityList(): Observable<Cities> {
    return this.get(this.apiEndpoints.getAllCities) as Observable<Cities>;
  }
  getCityName(lat: number, lng: number): Observable<any> {
    return this.httpClient.get(
      this.apiEndpoints.getPlaceName +
        'latlng=' +
        lat +
        ',' +
        lng +
        '&sensor=true&key=' +
        env.agmApiKey
    ) as Observable<any>;
  }
  addCity(addCity: AddCity): Observable<any> {
    return this.post(this.apiEndpoints.addCity, addCity) as Observable<any>;
  }
}
