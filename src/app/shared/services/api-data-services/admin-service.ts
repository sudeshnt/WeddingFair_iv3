import { Injectable } from '@angular/core';
import { AppConfig, ServiceConfig} from "../../config";
import { HttpService } from "../../services";

@Injectable()
export class AdminService {

  constructor(private httpService : HttpService) {}

  //POST
  public login(req){
    let promise = new Promise((resolve, reject) => {
      return this.httpService.httpPut(AppConfig.GB_API_URL ,ServiceConfig.SAMPLE_SERVICE,"/login", req , null, false).then((data : any) => {
        resolve(data);
      }).catch((error : any) => {
        resolve(null);
      });
    });
    return promise;
  }

}
