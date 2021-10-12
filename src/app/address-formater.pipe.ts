import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addressFormater'
})
export class AddressFormaterPipe implements PipeTransform {

  transform(userAddress: any, ...args: any[]): any {
    if(userAddress){
    return userAddress?.name +","+userAddress?.address+","+userAddress?.city+"-"+userAddress?.pincode+"\n"+userAddress?.phone;
    }
    return "";
  }

}
