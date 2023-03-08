import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Cities } from '../shared/models/interfaces/cities';
import { ApiService } from '../shared/services/api/api.service';

@Component({
  selector: 'app-city-lists',
  templateUrl: './city-lists.component.html',
  styleUrls: ['./city-lists.component.scss'],
})
export class CityListsComponent {
  cities: any = [];
  @Input() reloadCities: boolean = false;

  @Output() coordinates = new EventEmitter<string>();

  constructor(@Inject(ApiService) private apiService: ApiService) {}

  getCities() {
    this.apiService.getCityList().subscribe((res) => {
      this.cities = res;
    });
  }

  ngOnInit(): void {
    this.getCities();
  }
  ngOnChanges() {
    if (this.reloadCities) {
      this.getCities();
    }
  }
  view_in_map(lat: string, lng: string) {
    console.log(lat, lng);
    this.coordinates.emit(lat + ',' + lng);
  }
}
