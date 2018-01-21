export class Device {
  constructor(public title: string) {
  }
}

export abstract class MobileService {
  abstract getDevice(): Device;
}

export class MockMobileService implements MobileService {
  getDevice(): Device {
    return new Device('IPhone 7');
  }
}

export class RealMobileService implements MobileService {
  getDevice(): Device {
    return new Device('IPad Pro');
  }
}

