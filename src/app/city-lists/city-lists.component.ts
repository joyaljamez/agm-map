import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Cities } from '../shared/models/interfaces/cities';
import { ApiService } from '../shared/services/api/api.service';

@Component({
  selector: 'app-city-lists',
  templateUrl: './city-lists.component.html',
  styleUrls: ['./city-lists.component.scss'],
})
export class CityListsComponent {
  cities: any = [];

  @Output() coordinates = new EventEmitter<string>();

  constructor(@Inject(ApiService) private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getCityList().subscribe((res) => {
      this.cities = res;
    });
  }
  view_in_map(lat: string, lng: string) {
    console.log(lat, lng);
    this.coordinates.emit(lat + ',' + lng);
  }
}
