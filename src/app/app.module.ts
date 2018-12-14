import { HospitalService } from './_services/hospital.service';
import { DepartmentViewComponent } from './components/DepartmentView/DepartmentView.component';
import { HospitalViewComponent } from './components/HospitalView/HospitalView.component';
import { appRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataService } from './_services/Data.service';

@NgModule({
  declarations: [AppComponent, HospitalViewComponent, DepartmentViewComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [HospitalService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
