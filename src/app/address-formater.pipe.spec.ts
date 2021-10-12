import { AddressFormaterPipe } from './address-formater.pipe';

describe('AddressFormaterPipe', () => {
  it('create an instance', () => {
    const pipe = new AddressFormaterPipe();
    expect(pipe).toBeTruthy();
  });
});
