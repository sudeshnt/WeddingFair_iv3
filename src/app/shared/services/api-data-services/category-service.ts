import { Injectable } from '@angular/core';
import { AppConfig, ServiceConfig} from "../../config";
import { HttpService } from "../../services";
import { catchError, map } from "rxjs/operators";
import {_throw} from "rxjs/observable/throw";

@Injectable()
export class CategoryService {

  constructor(private httpService : HttpService) {}

  //GET
  public getApprovedServiceCategories(){
    const path = '/categories/approved';
    return this.httpService.httpGet(ServiceConfig.CATEGORY_MANAGEMENT_SERVICE, path, {}, null).pipe(
      map(
        (res: any) => {
          return res;
        }
      ),
      catchError(
        (error: any) =>
          _throw(error)
      ));
  }

}
