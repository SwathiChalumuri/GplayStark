import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class Serv1Service {
  public subj:Subject<any>;
  constructor(public http:HttpClient) {
    this.subj=new Subject();
   }
  getData(){
   return this.http.get('../../assets/data.json');
}
}
