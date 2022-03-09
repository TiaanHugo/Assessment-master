import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OfficeComponent } from './office/office.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    OfficeComponent,
    TopnavComponent,
    ModalContainerComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  entryComponents : [ModalContainerComponent]


})
export class AppModule { }
