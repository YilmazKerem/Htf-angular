import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HtfServiceService } from 'src/app/Services/htf-service.service';

import * as L from 'leaflet';
import 'mapbox-gl-leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit
{

  map: L.Map;

  mapp: any;

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  constructor(private svc: HtfServiceService) { }

  data: any;

  GetDataCenters()
  {
    this.svc.GetDataCenters().subscribe((res) =>
    {
      console.log(res);

      //@ts-ignore
      this.data = res.data;

      for (let index = 0; index < this.data.length; index++) {
        this.showMarker(this.data[index].location.lat, this.data[index].location.lng, this.data[index].name, this.data[index].inIsolation);

      }

    });




  }
  test()
  {
    console.log("lmfao");
  }

  showMarker(lat: number, lng: number, data: string, isolatie: any)
  {
    // var lat = 51;
    // var lng = 1;
    var Icon;

    if (isolatie == true) {
      Icon = L.icon({
        iconUrl: 'assets/icon/pin.png',
        iconSize: [20, 20],
      });
    }
    else {
      Icon = L.icon({
        iconUrl: 'assets/icon/pin-green.png',
        iconSize: [20, 20],
      });
    }



    var popup = L.popup()
      .setLatLng([lat, lng])
      .setContent(`<p>Naam: ${ data }</p><p>In isolatie: ${ isolatie }</p> <div>  </div> `)// <button onclick='this.test()'>Zet in Isolatie</button>
      .openOn(this.mapp);

    L.marker([lat, lng], { icon: Icon }).addTo(this.mapp).bindPopup(popup).closePopup();
  }

  ngOnInit(): void
  {
    this.GetDataCenters();
  }

  ngAfterViewInit()
  {
    const myAPIKey = "a54cce48cbd94338acc853b1a97f787e";
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

    const initialState = {
      lng: 11,
      lat: 49,
      zoom: 4
    };

    if (initialState.zoom < 1) {
      initialState.zoom = 1;
    }

    this.mapp = new L.Map(this.mapContainer.nativeElement).setView(
      [initialState.lat, initialState.lng],
      initialState.zoom
    );

    this.mapp.attributionControl
      .setPrefix("")
      .addAttribution(
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
      );

    L.mapboxGL({
      style: `${ mapStyle }?apiKey=${ myAPIKey }`,
      accessToken: "no-token"
    }).addTo(this.mapp);

    this.GetDataCenters();


    // this.showMarker();
  }

}
