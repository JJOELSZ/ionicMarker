
import { Component, OnInit } from '@angular/core';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  map = null;
  markers: Marker[] = [
    {
      position: {
        lat: -11.957736038721178, 
        lng: -77.06876024495152,
      },
      title: 'UNIVERSIDAD PRIVADA DEL NORTE'
    },
    {
      position: {
        lat: -11.927142578782627, 
        lng: -77.05138739873935,
      },
      title: 'UNIVERSIDAD CESAR VALLEJO'
    },
    {
      position: {
        lat: -11.961212381974697,
        lng: -77.06518670556699,
      },
      title: 'UNIVERSIDAD DE CIENCIAS Y HUMANIDADES'
    },
    {
      position: {
        lat: -11.950010852121942, 
        lng: -77.06309541932404,
      },
      title: 'UNIVERSIDAD TECNOLOGIA DEL PERU'
    },
  ];

  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // crear un nuevo mapa

    const mapEle: HTMLElement = document.getElementById('map');
    // crear un objeto LatLng 
    const myLatLng = {lat: -11.957736038721178,  lng: -77.06876024495152};
    // creando el mapa
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

}