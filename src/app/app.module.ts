import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Route } from "@angular/router";

import { AppComponent } from './app.component';
import { DataService } from "./data.service";
import { AboutComponent } from "./about/about.component";

import { HelloWordComponent } from './hello-word/hello-word.component';
import { FamilarComponent } from './familar/familar.component';
import { from } from 'rxjs';

const routes: Route[] = [
  {path: '', component: HelloWordComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelloWordComponent,
    FamilarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
