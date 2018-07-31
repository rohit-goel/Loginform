import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewformdata',
  templateUrl: './viewformdata.component.html',
  styleUrls: ['./viewformdata.component.css']
})
export class ViewformdataComponent implements OnInit {
show;
  constructor() {
    this.show = JSON.parse(localStorage.getItem("totaldata"));
  }

  ngOnInit() {
  }

}
