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
 data:any;
  lat: number;
  lng: number;
  latitude: any;
  lngnitude: any;

  constructor(private http:HttpClient,private markerservice:MarkerService) { }


  form = new FormGroup({
    Name: new FormControl(''),
    Driver: new FormControl(''),
    lat: new FormControl(''),
    lon : new FormControl(''),
    coordinates:new FormControl('')
  });



/*
  SaveData() {

    if (this.form.invalid) return;

    this.markerservice.makeMarkers( this.form.value)
   .subscribe( ( result ) => {

     console.log(result);
     });
  }
*/

  ngOnInit(): void {
    if(!navigator.geolocation){
      console.log('location not supported');
    }

    navigator.geolocation.getCurrentPosition((position)=>{
      this.latitude=position.coords.latitude;
      this.lngnitude = position.coords.longitude;
      const coords= position.coords;
      const accuracy=position.coords.accuracy;



      console.log(`lat:${position.coords.latitude},lon:${position.coords.longitude},accuracy${position.coords.accuracy}`
      );
      let map = L.map('map').setView([coords.latitude,coords.longitude], 13);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxseXNvbjIwMjAyMCIsImEiOiJja3p1ZTZybXowb2d5MnZtaG9nZDJuYTlkIn0.KEN0uc8OzBx5-lblDlbFgg', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(map);
    var marker = L.marker([coords.latitude,coords.longitude]).addTo(map);
    var circle = L.circle([coords.latitude,coords.longitude], {radius:accuracy}).addTo(map)

    marker.bindPopup('<b>Ambulance 1</b>').openPopupconst


   // this.latitude=position.coords.latitude;
   // this.lngnitude = position.coords.longitude;

   // const formData = new FormData();
    //formData.append('lat', this.latitude);
    //formData.append('lon',this.lngnitude);
    //formData.append('coordinates',this.map);

   // this.http.post('http://localhost:3000/Ambulancetracking/create',formData).subscribe((data)=>{


    //  console.log(data)
    //})

   });
  /* this.markerservice.makeMarkers( this.form.value)
   .subscribe( ( result ) => {

     console.log(result);
     });
     */

   this.watchPosition();


  }
  watchPosition(){
    let desLat=0;
    let desLon=0;
    let id=navigator.geolocation.watchPosition((position)=>{

      console.log(`lat:${position.coords.latitude},lon:${position.coords.longitude},accuracy${position.coords.accuracy}`);
     if(position.coords.latitude===desLat){
    navigator.geolocation.clearWatch(id);
     }
    },(err)=>{
      console.log(err);
    },{
      enableHighAccuracy:true,
      timeout:5000,
      maximumAge:0
   })
  }





}

