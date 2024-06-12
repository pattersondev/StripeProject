import { HttpClient, provideHttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../types/Product.type";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ProductService {
    private endpoint = 'http://localhost:3000/api/v1/products';

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.endpoint); // Specify the type of the response as Product[]
    }
}