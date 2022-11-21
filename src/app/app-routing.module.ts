import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgSampleComponent } from './ag-sample/ag-sample.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ag-sample',
    pathMatch: 'full'
  },
  {
    path: 'ag-sample',
    component: AgSampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
