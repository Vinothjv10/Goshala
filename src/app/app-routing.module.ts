import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentersComponent } from './centers/centers.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '', component: ContentComponent
  },
  {
    path: 'center', component: CentersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
