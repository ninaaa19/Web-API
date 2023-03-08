import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { 

  }

  title = 'Objekte';

  Logo:string = 'assets/images/Logo.jpg';
  
  ngOnInit(): void {
    this.http.get('http://localhost:3000/objekte', /*body as {}*/).subscribe((result: any) => {
      return result;
    })
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
