import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo'
})
export class SexoPipe implements PipeTransform {

  transform(value: any): any {
    if (value == "M") {
      return "Masculino";
    }
    return "Femenino";
  }


}
