import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  color1 = 'green';
  color2 = '#F0FFFF';
  constructor() { }

  ngOnInit() {
  }

}
