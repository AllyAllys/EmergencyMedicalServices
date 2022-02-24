import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as L from 'leaflet';
import { MarkerService } from './map.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
 private map;

  constructor(private http:HttpClient,private markerservice:MarkerService) { }


  ngAfterViewInit():void{
    this.initMap();
    this.markerservice.makeMarkers(this.map);
  }


  private initMap():void{


    navigator.geolocation.getCurrentPosition((position)=>{

      const coords= position.coords;
      const accuracy=position.coords.accuracy;

      var marker = L.marker([coords.latitude,coords.longitude]).addTo(this.map);
      var circle = L.circle([coords.latitude,coords.longitude],{radius:accuracy}).addTo(this.map)
      console.log(`lat:${position.coords.latitude},lon:${position.coords.longitude},accuracy${position.coords.accuracy}`
      );

      marker.bindPopup('<b>Ambulance 1 </b> <p> Driver: Fabien Paul </p>').openPopupconst



    })





      this.map = L.map('map').setView([10.6 ,-61.1], 13);

     const tiles= L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxseXNvbjIwMjAyMCIsImEiOiJja3p1ZTZybXowb2d5MnZtaG9nZDJuYTlkIn0.KEN0uc8OzBx5-lblDlbFgg', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    })
     tiles.addTo(this.map);






  }


  ngOnInit(): void {

  }








}


