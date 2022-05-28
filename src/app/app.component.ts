import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './models/pagination';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-Commerce';
  products:IProduct[] | undefined;
  pagination:IPagination | undefined;
  
  constructor(private http:HttpClient ){

  }

  ngOnInit(): void {


    this.http.get('https://localhost:44389/api/Products/GetAllProducts').subscribe(
      (response:any):void => {
      this.products = response.data;    

    }, error =>{
      console.log(error)
    });
    
  }
}
