import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service'

@Component({
  selector: 'app-provider-information',
  templateUrl: './provider-information.component.html',
  styleUrls: ['./provider-information.component.css']
})
export class ProviderInformationComponent {

  constructor(private _obj: ProviderService){

    _obj.getProviderData().subscribe(data => {
      console.log(data);
    })

  }

}
