import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './components/application/app.component';
import {MobileService} from 'app/services/mobile.service';
import {MockMobileService} from 'app/services/mobile.service';
import {Mobile1Component} from './components/mobile/mobile1.component';
import {Mobile2Component} from './components/mobile/mobile2.component';

@NgModule({
  imports: [BrowserModule],
  providers: [MobileService],
  //providers: [{provide:MobileService, useClass:MockMobileService}],
  declarations: [AppComponent, Mobile1Component, Mobile2Component],
  bootstrap: [AppComponent]
})
export class AppModule {
}

