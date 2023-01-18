import { Injectable } from '@angular/core';
import { Objekte } from './mock-objekt';
import { Objekt } from './objekt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjektService {

  constructor(private httpClient:HttpClient) { }

  ObjekteUrl :string = "/api/objekte";

  getObjekte() : Observable<Objekt[]>{
    
    var response = this.httpClient.get<Objekt[]>(this.ObjekteUrl);

    return response;
  }

  deleteObjekt(objekt: Objekt): Observable<Objekt> {
    
    var response = this.httpClient.delete<Objekt>(this.ObjekteUrl + "/" + objekt.id);
    return response;
  }

  getObjektById(id : number) : Observable<Objekt> {
    var response = this.httpClient.get<Objekt>(this.ObjekteUrl + "/" + id);

    var objektById = Objekte.find(x => x.id == id)!;
    return response;
  }
  
  addObjekt(objekt : Objekt) : Observable<Objekt> {
    var response = this.httpClient.post<Objekt>(this.ObjekteUrl, objekt);
    return response;
  }

}
