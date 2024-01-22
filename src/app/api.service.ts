import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMeter} from "./meter";
import {IMeterInput} from "./meter-input";
import {IMeterShort} from "./meter-short";

const url = (resource: string[]) => {
  return 'http://localhost:3000/' + resource.join('/')
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<IMeterShort[]>(url(['meters']))
  }

  details(id: string) {
    return this.http.get<IMeter>(url(['meters', id]))
  }

  create(meter: IMeterInput) {
    return this.http.post<IMeterShort>(url(['meters', 'create']), meter)
  }

  // Need to be changed
  use(id: string) {
    return this.http.get<IMeter>(url(['meters', id, 'use']))
  }

  status(id: string, status: boolean) {
    return this.http.put<IMeter>(url(['meters', id, 'status']), {
      status
    })
  }
}
