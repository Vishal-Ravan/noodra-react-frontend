import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor() { }
  id: any ='transaction';
  tab(ids: any) {
    this.id = ids;
  }
  ngOnInit(): void {
  }

}
