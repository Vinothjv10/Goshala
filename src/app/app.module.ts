import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { DialogComponent } from './dialog/dialog.component';
import { CentersComponent } from './centers/centers.component';
import { Center1Component } from './center1/center1.component';
import { Center2Component } from './center2/center2.component';
import { Center3Component } from './center3/center3.component';
import { Center4Component } from './center4/center4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContentComponent,
    FooterComponent,
    ArticleComponent,
    DialogComponent,
    CentersComponent,
    Center1Component,
    Center2Component,
    Center3Component,
    Center4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
