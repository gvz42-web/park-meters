import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {ApiService} from "../../api.service";
import {IMeter} from "../../meter";

export const meterResolver: ResolveFn<IMeter> = (route, state) => {
  return inject(ApiService).details(route.paramMap.get('id')!);
};
