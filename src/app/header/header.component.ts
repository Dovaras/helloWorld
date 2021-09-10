import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerFileName = 'bootstrap-logo.svg';
  //headerLogoUrl = 'https://getbootstrap.com/docs/5.1/assets/brand/' + this.headerFileName;

  constructor() { }

  ngOnInit(): void {
  }

}
