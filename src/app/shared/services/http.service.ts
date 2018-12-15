import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Events, Loading, LoadingController } from "ionic-angular";
import { Injectable } from '@angular/core';
import { _throw } from 'rxjs/observable/throw';
import { catchError, map } from 'rxjs/operators';
import { AppConfig } from '../config';

import { UserService } from "./user";

@Injectable()
export class HttpService {

  loading:Loading;
  private WEB_API_URL = AppConfig.API_URL;

  constructor(public userService : UserService, public httpClient: HttpClient, public loadingCtrl: LoadingController, public events: Events) {}

    httpGet(sevConfig: any, path: string, header_value: any, no_loading: boolean) {
      if(!no_loading) this.showLoadingSpinner();
      const httpHeaders = this.setHeader(header_value);
      const url = this.WEB_API_URL + sevConfig.ROUTE_PATH + path;
      return this.httpClient.get(url, { headers: httpHeaders }).pipe(
        map(
          (res: any) => {
            this.hideLoadingSpinner();
            return res;
          }
        ),
        catchError(
          (error: any) => {
            this.hideLoadingSpinner();
            return error;
          }
        )
      );
    }

    httpPost(sevConfig: any, path: string, body: any, header_value: any, no_loading: boolean) {
      if(!no_loading) this.showLoadingSpinner();
      const httpHeaders = this.setHeader(header_value);
      const url = this.WEB_API_URL + sevConfig.ROUTE_PATH + path;
      return this.httpClient.post(url, body, { headers: httpHeaders }).pipe(
        map(
          (res: any) => {
            this.hideLoadingSpinner();
            return res;
          }
        ),
        catchError(
          (error: any) => {
            this.hideLoadingSpinner();
            return error;
          }
        )
      );
    }

    httpPut(sevConfig: any, path: string, body: any, header_value: any, no_loading: boolean) {
      if(!no_loading) this.showLoadingSpinner();
      const httpHeaders = this.setHeader(header_value);
      const url = this.WEB_API_URL + sevConfig.ROUTE_PATH + path;
      return this.httpClient.put(url, body, { headers: httpHeaders }).pipe(
        map(
          (res: any) => {
            this.hideLoadingSpinner();
            return res;
          }
        ),
        catchError(
          (error: any) => {
            this.hideLoadingSpinner();
            return error;
          }
        )
      );
    }

    // private setHeader (header: any, header_value: any) {
    //   if (this.publicData.LoginResponse.session) {
    //     header = header.set('sessionid', this.publicData.LoginResponse.session);
    //   } else {
    //     header = header.set('sessionid', 'null');
    //   }
    //   if (header_value) {
    //     for (const key in header_value) {
    //       header = header.set(key, header_value[key]);
    //     }
    //   }
    //   return header;
    // }


    // httpGet(apiUrl:string, serviceConfig : any, path : string, body : any, header_value : any, no_loading:any) {
    //     if(!no_loading) this.showLoadingSpinner();
    //     let promise = new Promise((resolve, reject) => {
    //         const httpHeaders = this.setHeader(header_value);
    //         const url = apiUrl + serviceConfig.ROUTE_PATH + path;
    //         return this.httpClient.get(url,{ headers: httpHeaders })
    //             .toPromise()
    //             .then(response => {
    //                 resolve(response);
    //                 this.hideLoadingSpinner();
    //             })
    //             .catch(error => {
    //                 this.handleError(error);
    //                 reject(error);
    //                 this.hideLoadingSpinner();
    //             });
    //     });
    //     return promise;
    // }
    //
    // httpPost(apiUrl:string, serviceConfig : any, path : string, body : any, header_value : any, no_loading:any) {
    //     if(!no_loading) this.showLoadingSpinner();
    //     let promise = new Promise((resolve, reject) => {
    //         const httpHeaders = this.setHeader(header_value);
    //         const url = apiUrl + serviceConfig.ROUTE_PATH + path;
    //         return this.httpClient.request("POST",url,{body:body,headers:httpHeaders})
    //             .toPromise()
    //             .then(response => {
    //                 resolve(response);
    //                 this.hideLoadingSpinner();
    //             })
    //             .catch(error => {
    //                 this.handleError(error);
    //                 reject(error);
    //                 this.hideLoadingSpinner();
    //             });
    //     });
    //     return promise;
    // }
    //
    // httpPut(apiUrl:string, serviceConfig : any, path : string, body : any, header_value : any, no_loading:any) {
    //     if(!no_loading) this.showLoadingSpinner();
    //     let promise = new Promise((resolve, reject) => {
    //         const req_body = JSON.stringify(body);
    //         const httpHeaders = this.setHeader(header_value);
    //         const url = apiUrl + serviceConfig.ROUTE_PATH + path;
    //         return this.httpClient.request("PUT",url,{body:req_body,headers:httpHeaders})
    //             .toPromise()
    //             .then(response => {
    //                 resolve(response);
    //                 this.hideLoadingSpinner();
    //             })
    //             .catch(error => {
    //                 this.handleError(error);
    //                 reject(error);
    //                 this.hideLoadingSpinner();
    //             });
    //     });
    //     return promise;
    // }

    private setHeader (header_value: any) {
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        if(this.userService.user){
            if(this.userService.user.isAuthorized && this.userService.user.sessionId){
                header = header.set('sessionId', this.userService.user.sessionId);
            }else{
                header = header.set('sessionId', "");
            }
        }
        if(header_value){
            for(let key in header_value){
                header = header.set(key, header_value[key]);
            }
        }
        return header;
    }

    showLoadingSpinner(){
        if(!this.loading){
            this.loading = this.loadingCtrl.create({
                "content" : "Loading..."
            });
            this.loading.present();
        }
    }

    hideLoadingSpinner(){
        if(this.loading){
            this.loading.dismiss();
            this.loading = null;
        }
    }

    private handleError (error: any) {
        this.events.publish('http:error', error);
    }

}
