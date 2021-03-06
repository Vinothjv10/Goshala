import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Center1Component } from './center1/center1.component';
import { Center2Component } from './center2/center2.component';
import { Center3Component } from './center3/center3.component';
import { Center4Component } from './center4/center4.component';
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
  },
  {
    path: 'center2', component: Center2Component
  },
  {
    path: 'center3', component: Center3Component
  },
  {
    path: 'center4', component: Center4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
