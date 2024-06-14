import { HttpClient, provideHttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../types/Product.type";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ProductService {
    cartData: Product[] = [];
    private endpoint = 'https://boiling-sea-08841-49d3e82f32ee.herokuapp.com/api/v1/products';

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.endpoint); // Specify the type of the response as Product[]
    }

    getProductById(id: string): Observable<Product> {
        return this.http.get<Product>(`${this.endpoint}/${id}`);
    }

    getProductByName(name: string): Observable<any> {
        return this.http.get<any>(`${this.endpoint}/name/${name}`);
    }

    setCartData(currentlyInCart: Product[]) {
        this.cartData = [...currentlyInCart];
    }

    getCartData(): Product[] {
        return this.cartData;
    }

    removeFromCart(index: number) {
        this.cartData.splice(index, 1);
    }
}