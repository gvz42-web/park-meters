import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMeter} from "./meter";

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
    return this.http.get<IMeter[]>(url(['meters']))
  }

  details(id: string) {
    return this.http.get<IMeter>(url(['meters', id]))
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
