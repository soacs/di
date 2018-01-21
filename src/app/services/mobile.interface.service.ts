
export class Device {
  constructor(public title: string) {
  }
}

interface IMobileService {
  getDevice(): Device;
}

export class MockMobileService implements IMobileService {
  getDevice(): Device {
    return new Device('IPhone 7');
  }
}

export class RealMobileService implements IMobileService {
  getDevice(): Device {
    return new Device('IPad Pro');
  }
}




