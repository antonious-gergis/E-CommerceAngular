import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { IBrand } from '../shared/models/brands';
import { IPagination } from '../shared/models/pagination';
import { IProductType } from '../shared/models/productTypes';
import { ShopParams } from '../shared/models/shopParams'; 

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'https://localhost:44389/api/';

  constructor(private http: HttpClient) {}

  getProduct(shopParam:ShopParams) {
    let params = new HttpParams();
    if(shopParam.brandId !== 0){
      params = params.append('brandId',shopParam.brandId.toString());
    }
    if(shopParam.typeId !== 0){
      params = params.append('typeId',shopParam.typeId.toString());
    }
    if(shopParam.search){
      params = params.append('search',shopParam.search);
    }
    params = params.append('sort',shopParam.sort);
    params = params.append('pageIndex',shopParam.pageNumber.toString());
    params = params.append('pageIndex',shopParam.pageSize.toString());


    return this.http.get<IPagination>(this.baseUrl + 'Products/GetAllProducts',{observe:'response',params})
    .pipe(
      delay(1000),
      map(
        response => {
          return response.body;

        })
    )
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'Products/GetProductBrands');
  }

  getTypes() {
    return this.http.get<IProductType[]>(this.baseUrl + 'Products/GetProductTypes');
  }
}
