import { IProduct } from "./product"

export interface IPagination {
    pageIndex: number |undefined
    pageSize: number |undefined
    count: number |undefined
    data: IProduct[]
  }