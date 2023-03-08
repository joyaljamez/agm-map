export class AddCity {
  name: string;
  country: string;
  lat: number;
  lng: number;

  constructor(name: string, country: string, lat: number, lng: number) {
    this.name = name;
    this.country = country;
    this.lat = lat;
    this.lng = lng;
  }
}
