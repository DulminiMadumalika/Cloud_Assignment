import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private _obj:HttpClient) { }

  getProviderData(){
    return this._obj.get("http://localhost:8080/SaasSafetyTravel/search");
  }

}
