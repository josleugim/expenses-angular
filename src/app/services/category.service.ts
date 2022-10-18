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
}
