import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Objekt } from './objekt';
import { ObjektService } from './objekt.service';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { 

  }
  
  objekte : Objekt[] = [];

  title = 'Objekte';

  Logo:string = 'assets/images/Logo.jpg';
  
  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/app/objekte', /*body as {}*/).subscribe((result: any) => {
      return result;
    })
  }
  suche(adresse: string): void {
    this.objekte = this.objekte.filter(obj => obj.adresse !== adresse);
    
  }
  
 
  

}
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], key: string, value: string): any[] {
    return array.filter(item => item[key].includes(value));
  }
}
