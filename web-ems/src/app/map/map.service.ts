import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";


@Injectable
({ providedIn:"root"})

export class MarkerService {



  constructor(private http: HttpClient ){ }

  makeMarkers(data:any){

    return this.http.post('http://localhost:3000/Ambulancetracking/create',data)



  }





}
