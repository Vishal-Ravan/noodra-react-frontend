import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  endpoint = 'product/';
  constructor(private HttpClient: HttpClient) { }
  category = environment.urlCategory

  getData(): Observable<any[]> {
    // return this.HttpClient.get('https://noodra.com:8443/api/product/top-category/');
    return this.HttpClient.get<any[]>(`${environment.url}/${this.endpoint}top-category/`);

  }
  getSubGategoriesOnHover(): Observable<any[]> {
    // return this.HttpClient.get(this.category);
    return this.HttpClient.get<any[]>(`${environment.url}/${this.endpoint}category/`);
  }
}