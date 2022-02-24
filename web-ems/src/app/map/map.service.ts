import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import * as L from 'leaflet';

@Injectable({ providedIn:"root"})
export class MarkerService {




  constructor(private http: HttpClient ){ }

  makeMarkers(map:L.map){
    this.http.get('http://localhost:3000/ambulancetracking/list').subscribe((res:any)=>{
      console.log(res.ambulanceinfoUser)

      for (let c of res.ambulanceinfoUser){
        const latitude=c.coordinates[0];
        const longitude = c.coordinates[1];
        const marker=L.marker([latitude,longitude]).addTo(map);

      }


    })


  }



}
