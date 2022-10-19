import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ICategory} from "../interfaces/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  get(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${environment.API}/category`);
  }

  post(categoryData: ICategory): Observable<any> {
    return this.http.post<any>(`${environment.API}/category`, categoryData);
  }

  modify(categoryData: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`${environment.API}/category`, categoryData);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.API}/category/${id}`);
  }
}
