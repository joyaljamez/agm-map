import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientProvider } from 'src/app/core/rest-client-provider/rest-client-provider';
import { Cities } from '../../models/interfaces/cities';

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
}
