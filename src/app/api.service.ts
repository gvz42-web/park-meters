import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMeter} from "./meter";

const url = (resource: string) => {
  return 'http://localhost:3000/' + resource
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {

  }

  list() {
    return this.http.get<IMeter[]>(url('meters'))
  }
}
