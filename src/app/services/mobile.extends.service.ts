
export class Device {
  constructor(public title: string) {
  }
}

interface IMobileService {
  getDevice(): Device
}

export abstract class MobileService implements IMobileService {
  showDevices(): string { return "IPhone X"; }
  abstract getDevice(): Device;
  constructor(){
    console.log("Abstract constructor");
  }
}

export class MockMobileService extends MobileService {
  getDevice(): Device {
    return new Device('IPhone 7');
  }
  constructor(){
    super();
    console.log("Derived Mock constructor");
  }
}

export class RealMobileService extends MobileService {
  getDevice(): Device {
    return new Device('IPad Pro');
  }
}




