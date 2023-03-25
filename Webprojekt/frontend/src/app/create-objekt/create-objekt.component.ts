import { Component, Injectable, OnInit } from '@angular/core';
import { ObjektService } from '../objekt.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Objekt } from '../objekt';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-create-objekt',
  templateUrl: './create-objekt.component.html',
  styleUrls: ['./create-objekt.component.css']
  
})


export class CreateObjektComponent implements OnInit {

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private ObjektService: ObjektService) { }

    
   objekte : Objekt =  {
    id: 2,
    typ: "",
    titel: "",
    beschreibung: "",
    adresse: "",
    plz: 3,
    ort: "",
    groesse: 50,
  
    }

  bild: any;
  file: any;

  ngOnInit(): void {
    if (this.router.url !='/create'){
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.ObjektService.getObjektById(id).subscribe((result) => {
        this.objekte = result;
      });
      
    }
  }

  save(): void {
    this.ObjektService.addObjekt(this.objekte).subscribe((result) => {
      if(result.id) {
        this.upload(result.id);
      }
    });
    this.router.navigate(['objekte']);
  }

  upload(id: number): void {
    console.log(this.file);
    this.ObjektService.upload(this.file, id).subscribe();
  }

  onFileChange(event: any) { //TODO only works with one file
    console.log("onFileChange", event);
    this.file = undefined;
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        //console.log("reader.onloadend", reader.result);
        if(event.target.files[0].type) {
        this.file = {name: event.target.files[0].name,file: reader.result, fileType: event.target.files[0].type, size: event.target.files[0].size};
        } else {
          this.file = {name: event.target.files[0].name,file: reader.result, fileType: "unknown", size: event.target.files[0].size};
        }
      };
    }
  }

}
