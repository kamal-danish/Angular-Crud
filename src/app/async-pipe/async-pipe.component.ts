import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { mergeMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  promise: Promise<unknown>;
  data: Observable<{}>;
  
  constructor(private auth:AuthService) {
		this.promise = this.getPromise(); 
  }
  ngOnInit(){

  }

  getPromise() {
     return new Promise((resolve, reject) => {
       setTimeout(() => resolve("Promise complete!"), 3000);
     });
  }
  // getAllFunction(){
  //   this.auth.getOneFunction().pipe(
  //     mergeMap(data => this.auth.getSecondFunction())
  //     .pipe(map(data2=>([this.data,data2])
  // ).subscribe(finalData => {
  //     console.log(finalData);
  // });
  // }
}