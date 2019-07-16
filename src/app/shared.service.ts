import { Injectable, EventEmitter } from '@angular/core';

type NewType = boolean;

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  dataChanges:any
  change = new EventEmitter();
  
  constructor() { }
}
