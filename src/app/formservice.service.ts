import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {
  storeData;
  constructor() { }
  setMethod(dataReceived){
    this.storeData=dataReceived;
  }
  getMethod(){
    return this.storeData;
  }
  
}
