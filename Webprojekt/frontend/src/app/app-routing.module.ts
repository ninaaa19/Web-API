import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjekteComponent } from './objekte/objekte.component';
import { CreateObjektComponent } from './create-objekt/create-objekt.component';
import { AppComponent } from './app.component';


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
