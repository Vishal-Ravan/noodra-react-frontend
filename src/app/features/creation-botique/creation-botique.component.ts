import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation-botique',
  templateUrl: './creation-botique.component.html',
  styleUrls: ['./creation-botique.component.css']
})
export class CreationBotiqueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  id: any ='stepOne';
  tab(ids: any) {
    this.id = ids;
   
    
  }
}
