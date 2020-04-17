import { Component, OnInit } from '@angular/core';
import { Serv1Service } from 'src/app/services/serv1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {
  arr: any = [];
  s;
  refinedArray: any;
  newarr: any= [];
  constructor(public ser: Serv1Service) { }

  ngOnInit() {
  
  this.getdetails();
    console.log(this.arr);
    //this.newarr=this.arr;
    this.ser.subj.subscribe(res => {
      this.arr=this.newarr;
      if (res == ''){
         return this.getdetails();
       }
      res = res.toLowerCase();
      this.refinedArray = this.arr.filter(x => {
        let name1 = x.name.toLowerCase();
        if (name1.includes(res))
          return x;
      });
      this.arr = this.refinedArray;
      this.refinedArray = [];
    });
    
    //this.arr=this.newarr;
  }

getdetails() {
    this.ser.getData().subscribe(res => {
      console.log(res);
      this.arr = res
      this.newarr=this.arr;
   });
  
  }

}
