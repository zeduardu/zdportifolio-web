import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {BrowserModule} from '@angular/platform-browser';
import {environment} from 'src/environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminlayoutComponent} from './layout/adminlayout/adminlayout.component';
import {ContentlayoutComponent} from './layout/contentlayout/contentlayout.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./shared/material.module";

@NgModule({
  declarations: [AppComponent, AdminlayoutComponent, ContentlayoutComponent],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule,
        MaterialModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
