import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjekteComponent } from './objekte/objekte.component';
import { CreateObjektComponent } from './create-objekt/create-objekt.component';
import { AppComponent } from './app.component';
import { WohnungenComponent } from './wohnungen/wohnungen.component';
import { HauserComponent } from './hauser/hauser.component';
import { BauplaetzeComponent } from './bauplaetze/bauplaetze.component';

const routes: Routes = [
  {
    path:'objekte', component: ObjekteComponent
  },
  {
    path:'create', component: CreateObjektComponent
  },
  {
    path: 'edit/:id', component:CreateObjektComponent
  },
  {
    path:'wohnungen', component: WohnungenComponent
  },
  {
    path:'hauser', component: HauserComponent
  },
  {
    path:'bauplaetze', component: BauplaetzeComponent
  },
  {
    path:'', redirectTo:'objekte', pathMatch:'full'
  },
  {
    path:'http://localhost:3000/objekte', component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
