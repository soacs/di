export class Device {
  constructor(public title: string) {
  }
}

export class MobileService {
  getDevice(): Device {
    return new Device('iPhone');
  }
}

export class MockMobileService implements MobileService {
  getDevice(): Device {
    return new Device('IPad Pro');
  }
}

