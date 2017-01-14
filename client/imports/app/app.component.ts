import { Component } from '@angular/core';
import { Parties } from '../../../both/collections/parties.collection';
import template from './app.component.html';
import { Observable } from 'rxjs/Observable'; 
@Component({
  selector: 'app',
 
  template
})
export class AppComponent {
  parties: Observable<any[]>;
 
  constructor() {
    this.parties = Parties.find().zone();
      
    
  }
}