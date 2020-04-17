import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showFiller = false;
  sideData1=["My apps","Shop"];
  sideData2=["Games","Family","Editors' Choice"];
  sideData3=["Account","Payment methods","My subscriptions","Redeem","Buy gift card","My wishlist","My Play activity","Parent Guide"]
  constructor() {

   }

  ngOnInit() {
  }

}
