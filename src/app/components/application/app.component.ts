import { Component } from '@angular/core';
import {MockMobileService} from 'app/services/mobile.extends.service';

// Root component hosts two different product components
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mockMobileService: MockMobileService = new MockMobileService();
}

