import { Injectable } from '@angular/core';
import { LocalDataService } from "./local-data.service";

@Injectable()
export class UserService {

    public user:any;

    constructor(private localDataService : LocalDataService) {
      this.user = {
        "isAuthorized" : false
      }
    }

    public getLocalAuthResponse(){
      let promise = new Promise((resolve, reject) => {
        this.localDataService.getItem('AUTH_RESPONSE').then((authResponse) => {
          if(authResponse !== null && authResponse["isAuthorized"]){
            resolve(authResponse);
          }else{
            resolve(null);
          }
        });
      });
      return promise;
    }

    public setLocalAuthResponse(auth_response,setLocalStorage){
      if(auth_response){
        auth_response.isAuthorized = true;
        this.user = auth_response;
        if(setLocalStorage){
          this.localDataService.setItem('AUTH_RESPONSE', auth_response);
        }
      }
    }

    public updateAuthResponseStatus(statusKey,status){
      try{
        this.localDataService.getItem('AUTH_RESPONSE').then((authResponse) => {
          if(authResponse !== null){
            authResponse[statusKey] = status;
            this.user = authResponse;
            this.setLocalAuthResponse(authResponse,true);
          }else{
            return false;
          }
        });
       }catch(e){
        return false;
       }
    }

    public removeLocalAuthResponse(){
      this.user = {
        "isAuthorized" : false
      };
      this.localDataService.remove('AUTH_RESPONSE');
    }

}
