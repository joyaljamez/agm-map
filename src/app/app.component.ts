import { Component } from '@angular/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'google-map';
  zoom: number = 10;
  lat = 51.678418;
  lng = 7.809007;
  draggable: boolean = true;
  coordinates: string = '';

  set_coordinates(coordinates: string) {
    const lat = coordinates.split(',')[0];
    const lng = coordinates.split(',')[1];

    this.lat = parseFloat(lat);
    this.lng = parseFloat(lng);
  }

  clickedMarker(label: string, index: number) {
    alert(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: AGMMouseEvent) {
    console.log('$event:', $event);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.coordinates = 'Selected coordinates are ' + this.lat + ',' + this.lng;
  }

  markerDragEnd(m: any, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}
