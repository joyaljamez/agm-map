import { AfterViewInit, Component, Inject } from '@angular/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';
import { ApiService } from './shared/services/api/api.service';
import { NotificationService } from './shared/services/notification.service';
import * as L from 'leaflet';
import { TileLayer } from 'leaflet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'google-map';
  zoom: number = 3;
  lat = 23.035162711194097;
  lng = 78.39210619605112;
  draggable: boolean = true;
  cities: any = [];
  citySelected: boolean = false;
  reloadCities: boolean = false;
  markerIcon = {
    icon: L.icon({
      iconSize: [20, 30],
      iconAnchor: [18, 18],
      popupAnchor: [0, -10],
      shadowSize: [0, 0],
      shadowAnchor: [10, 10],
      iconUrl: 'https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png',
    }),
  };

  private map: L.Map;
  constructor(
    @Inject(ApiService) private apiService: ApiService,
    private notifyService: NotificationService
  ) {}
  ngOnInit(): void {
    this.getCities();
  }
  ngAfterViewInit() {
    this.initMap();
  }
  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    ).addTo(this.map);
    this.map.on('click', (e) => {
      console.log(e.latlng); // get the coordinates
      L.marker([e.latlng.lat, e.latlng.lng], {
        icon: this.markerIcon.icon,
        draggable: true,
      }).addTo(this.map); // add the marker onclick

      this.apiService
        .addCity({
          name: 'NEW CITY',
          country: 'test',
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        })
        .subscribe((res) => {
          this.reloadCities = true;
          this.notifyService.showSuccess('City added successfully', 'Success');
        });
      this.reloadCities = false;
    });
    this.map.panTo(new L.LatLng(24.367113562651276, 75.38678926498801));
  }

  getCities() {
    this.apiService.getCityList().subscribe((res) => {
      this.cities = res;
      this.cities.forEach((city) => {
        L.marker([city.lat, city.lng], {
          icon: this.markerIcon.icon,
          draggable: true,
        }).addTo(this.map);
      });
      if (this.cities.length > 0) {
        this.lat = parseFloat(this.cities[0].lat);
        this.lng = parseFloat(this.cities[0].lng);
      }
    });
  }

  set_coordinates(coordinates: string) {
    this.cities = [];
    this.citySelected = true;
    this.lat = parseInt(coordinates.split(',')[0]);
    this.lng = parseInt(coordinates.split(',')[1]);
    this.map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });
    L.marker([this.lat, this.lng], {
      icon: this.markerIcon.icon,
      draggable: true,
    }).addTo(this.map);
  }
}
