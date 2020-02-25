import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ResidentialComponent } from './residential/residential.component';
import { MedicalComponent } from './medical/medical.component';
import { RetailComponent } from './retail/retail.component';
import { HospitalityComponent } from './hospitality/hospitality.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'residential',
    component: ResidentialComponent
  },
  {
    path: 'medical',
    component: MedicalComponent
  },
  {
    path: 'retail',
    component: RetailComponent
  },
  {
    path: 'hospitality',
    component: HospitalityComponent
  }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
