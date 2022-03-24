import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Center1Component } from './center1/center1.component';
import { CentersComponent } from './centers/centers.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '', component: ContentComponent
  },
  {
    path: 'center', component: CentersComponent
  },
  {
    path: 'center1', component: Center1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
