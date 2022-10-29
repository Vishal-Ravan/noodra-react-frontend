import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-command',
  templateUrl: './detail-command.component.html',
  styleUrls: ['./detail-command.component.css']
})
export class DetailCommandComponent implements OnInit {

  constructor() { }
  id: any ='commandes';
  tab(ids: any) {
    this.id = ids;
  }
  ngOnInit(): void {
  }

}
