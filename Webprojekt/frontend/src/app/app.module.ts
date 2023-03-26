import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjekteComponent } from './objekte/objekte.component';
import { FormsModule } from '@angular/forms';
import { CreateObjektComponent } from './create-objekt/create-objekt.component';
import { HttpClientModule } from '@angular/common/http';
import { WohnungenComponent } from './wohnungen/wohnungen.component';
import { HauserComponent } from './hauser/hauser.component';
import { BauplaetzeComponent } from './bauplaetze/bauplaetze.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjekteComponent,
    CreateObjektComponent,
    WohnungenComponent,
    HauserComponent,
    BauplaetzeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
