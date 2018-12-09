import { Injectable } from '@angular/core';
import { AppConfig, ServiceConfig} from "../../config";
import { HttpService } from "../../services";

@Injectable()
export class CategoryService {

  constructor(private httpService : HttpService) {}

  //GET
  public getApprovedServiceCategories(){
    let promise = new Promise((resolve, reject) => {
      return this.httpService.httpGet(
        AppConfig.API_URL ,ServiceConfig.CATEGORY_MANAGEMENT_SERVICE,"/categories/approved", {} ,
        null, false)
      .then((data : any) => {
        resolve(data);
      })
      .catch((error : any) => {
        resolve(null);
      });
    });
    return promise;
  }

}
