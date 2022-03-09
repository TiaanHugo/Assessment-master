import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OfficeComponent } from './office/office.component';
import { TopnavComponent } from './topnav/topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    OfficeComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
