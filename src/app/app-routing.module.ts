import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { ResidentialComponent } from './residential/residential.component';
import { MedicalComponent } from './medical/medical.component';
import { RetailComponent } from './retail/retail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'landing',
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
