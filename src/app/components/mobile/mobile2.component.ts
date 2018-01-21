import {Component} from '@angular/core';
import {Device, MobileService} from 'app/services/mobile.service';
import {MockMobileService} from 'app/services/mobile.service';

@Component({
  selector: 'mobile2',
  templateUrl: './mobile2.component.html',
  styleUrls: ['./mobile2.component.css'],
  providers: [{provide: MobileService, useClass: MockMobileService}],
})
export class Mobile2Component {
  device: Device;

  constructor(private mobileService: MobileService) {
    this.device = mobileService.getDevice();
  }
}

