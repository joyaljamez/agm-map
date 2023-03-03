import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export abstract class RestClientProvider {
    protected httpClient: HttpClient;
    protected apiBaseURL: string;
    protected serviceType: string;
    protected apiEndpoints: any;
    env = environment;

    constructor(httpClient: HttpClient, serviceType: string) {
        this.httpClient = httpClient;
        this.serviceType =  serviceType;
        this.apiBaseURL = this.env.apiBaseUrls[serviceType];
       // console.log(this.apiBaseURL);
        this.apiEndpoints = this.env.apiEndpoints[serviceType];
        // console.log(this.apiEndpoints);
    }
    protected post(restEndpoint: string, body: any, options?: any): Observable<object> {
        if (options) {
            return this.httpClient.post(this.apiBaseURL.concat(restEndpoint), body, options);
        } else {
            return this.httpClient.post(this.apiBaseURL.concat(restEndpoint), body);
        }
    }
    protected put(restEndpoint: string, body: any, options?: any): Observable<object> {
      if (options) {
          return this.httpClient.put(this.apiBaseURL.concat(restEndpoint), body, options);
      } else {
          return this.httpClient.put(this.apiBaseURL.concat(restEndpoint), body);
      }
  }
    protected delete(restEndpoint: string, body: any, options?: any): Observable<object> {
      if (options) {
        return this.httpClient.delete(this.apiBaseURL.concat(restEndpoint), options);
      } else {
          return this.httpClient.delete(this.apiBaseURL.concat(restEndpoint), body);
      }
  }
    protected get(restEndpoint: string, options?: any): Observable<object> {
        if (options) {
            return this.httpClient.get(this.apiBaseURL.concat(restEndpoint), options);
        } else {
            return this.httpClient.get(this.apiBaseURL.concat(restEndpoint));
        }
    }
}
