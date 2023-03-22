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

  ObjekteUrl :string = "http://localhost:3000/api/app";

  getObjekte() : Observable<Objekt[]>{
    
    var response = this.httpClient.get<Objekt[]>(this.ObjekteUrl + "/objekte");

    return response;
  }

  deleteObjekt(objekt: Objekt): Observable<Objekt> {
    
    var response = this.httpClient.delete<Objekt>(this.ObjekteUrl + "/objekte" + objekt.id);
    return response;
  }

  getObjektById(id : number) : Observable<Objekt> {
    var response = this.httpClient.get<Objekt>(this.ObjekteUrl + "/IDsuchen" + id);

    var objektById = Objekte.find(x => x.id == id)!;
    return response;
  }
  
  addObjekt(objekt : Objekt) : Observable<Objekt> {
    var response = this.httpClient.post<Objekt>(this.ObjekteUrl +"/objekte", objekt);
    return response;
  }

  upload(file: any, id: number) : Observable<any> {
    var response = this.httpClient.post<any>(this.ObjekteUrl + "/upload-image", {id: id, file: file, fileType: file.type});
    return response;
  }
  suche(objekt: Objekt) : Observable<Objekt> {
    var response = this.httpClient.get<Objekt>(this.ObjekteUrl + "/objektesuchen");
    return response;
  }

}
