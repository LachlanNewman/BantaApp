import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RegisterPage} from "../pages/register/register";
import {RadiostationsPage} from "../pages/radiostations/radiostations";
import {VerificationPage} from "../pages/verification/verification";
import {TopicsPage} from "../pages/topics/topics";
import {PopoverPage} from "../pages/popover/popover";

import {AngularFireModule} from 'angularfire2'
import {AngularFireAuthModule} from 'angularfire2/auth'
import {AngularFirestoreModule} from "angularfire2/firestore";
import {SMS} from '@ionic-native/sms'

export const firebaseconfig = {
  apiKey: "AIzaSyB70l8eKDrXgg46VMwUu6Z9HSvZseOfiYk",
  authDomain: "banta-d0749.firebaseapp.com",
  databaseURL: "https://banta-d0749.firebaseio.com",
  projectId: "banta-d0749",
  storageBucket: "banta-d0749.appspot.com",
  messagingSenderId: "704951282979"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    RadiostationsPage,
    VerificationPage,
    TopicsPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    RadiostationsPage,
    VerificationPage,
    TopicsPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}