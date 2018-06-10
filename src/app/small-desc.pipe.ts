import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smallDesc'
})
export class SmallDescPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.length>30){
      return value.substr(0,30);
    }
    else{
      return value;
    }
  }

}
