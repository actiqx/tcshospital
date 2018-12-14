import { DepartmentViewComponent } from './components/DepartmentView/DepartmentView.component';
import { Routes } from '@angular/router';
import { HospitalViewComponent } from './components/HospitalView/HospitalView.component';

export const appRoutes: Routes = [
  { path: 'hospital', component: HospitalViewComponent },
  { path: 'department', component: DepartmentViewComponent },
  { path: '', redirectTo: 'hospital', pathMatch: 'full' }
];
