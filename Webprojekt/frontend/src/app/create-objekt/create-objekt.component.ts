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
    id: 5,
    titel: "Wohnung",
    beschreibung: "Beispieltext für eine Wohnung",
    adresse: "Musterstraße",
    groeße: 50,
    }

  ngOnInit(): void {
    if (this.router.url !='/create'){
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.ObjektService.getObjektById(id).subscribe((result) => {
        this.objekte = result;
      });
      
    }
  }

  save(): void {
    this.ObjektService.addObjekt(this.objekte).subscribe();
    this.router.navigate(['objekte']);
  }

}
