import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  id: any ='setting';
  tab(ids: any) {
    this.id = ids;
  }
  onActivate(event:any): void {
    window.scroll(0, 0);
  }
}
