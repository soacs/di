import {Component} from '@angular/core';
import {Device, MobileService} from 'app/services/mobile.service';

@Component({
  selector: 'mobile1',
  templateUrl: './mobile1.component.html',
  styleUrls: ['./mobile1.component.css']
})
export class Mobile1Component {
  device: Device;

  constructor(private mobileService: MobileService) {
    this.device = mobileService.getDevice();
  }
}

