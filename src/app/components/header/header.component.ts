import { Component, OnInit } from '@angular/core';
import { Serv1Service } from 'src/app/services/serv1.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
search;

  constructor(public ser:Serv1Service) { }

  ngOnInit() {
  }
  // submit(){
  //   this.ser.subj.next(this.search);
  // }
  onSearchChange(google){
    this.ser.subj.next(google);
  }
}
