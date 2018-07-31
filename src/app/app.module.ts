import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewformdataComponent } from './viewformdata/viewformdata.component';
import { EditformdataComponent } from './editformdata/editformdata.component';

const routes: Routes = [
  {
    path: 'viewdata', 
    component: ViewformdataComponent
  },
  {
    path: 'editdata', 
    component: EditformdataComponent
  },
  {
    path: '', 
    component: EditformdataComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewformdataComponent,
    EditformdataComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
