import { Component, OnInit } from '@angular/core';
// import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from '../../services/category.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  closeResult = '';
  head: any;
  listFirstCategories: any = [];
  items: any = [];
  subCatItems: any = [];
  subsubCatItems: any = [];

  constructor(public dialog: MatDialog, private category: CategoryService, private itemtwo: CategoryService) {
    this.category.getData().subscribe(data => {
      this.head = data;
    });
    this.category.getSubGategoriesOnHover().subscribe((item => {
      this.items = item
      console.warn(this.items, "hiiiiiiiiiiiiii")
    }))
  }
  xs: any;
  getSubGategoriesOnHover(cat: any): any {
    console.warn("hello")
  }
  url = "assets/logo.jpg"
  isValid = true;
  ngOnInit(): void {
  }
  datas: any = localStorage.getItem("id");
  remove() {
    localStorage.removeItem('id');
  }
  openpop() {
    const dialogRef = this.dialog.open(CategoriesComponent, {
      width: '400px'
    });
    localStorage.setItem("email", "vishal2992000@gmail.com"),
      localStorage.setItem("password", "12"),
      localStorage.setItem("id", "1")
    { { this.datas == 1 ? this.isValid = false : this.isValid = true } }
  }
  onhoverAll(cat: any) {
    var ar = this.items
    ar.forEach((value: any) => {
      if (cat === value.parent) {
        this.onhoverAllfirst(value.id)
      }
    })
  }
  onhoverAllfirst(subpar: any) {
    var ars = this.items
    this.subsubCatItems = [];
    ars.forEach((val: any) => {
      if (subpar === val.parent) {
        this.subsubCatItems.push(val.translations.fr.name)
      }
    })
  }
}
