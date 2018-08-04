import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Events, Loading, LoadingController } from "ionic-angular";
import { Injectable } from '@angular/core';

import { UserService } from "./user";

@Injectable()
export class HttpService {

    loading:Loading;

    constructor(public userService : UserService, public httpClient: HttpClient, public loadingCtrl: LoadingController, public events: Events) {}

    httpGet(apiUrl:string, serviceConfig : any, path : string, body : any, header_value : any, no_loading:any) {
        if(!no_loading) this.showLoadingSpinner();
        let promise = new Promise((resolve, reject) => {
            const httpHeaders = this.setHeader(header_value);
            const url = apiUrl + serviceConfig.ROUTE_PATH + path;
            return this.httpClient.get(url,{ headers: httpHeaders })
                .toPromise()
                .then(response => {
                    resolve(response);
                    this.hideLoadingSpinner();
                })
                .catch(error => {
                    this.handleError(error);
                    reject(error);
                    this.hideLoadingSpinner();
                });
        });
        return promise;
    }

    httpPost(apiUrl:string, serviceConfig : any, path : string, body : any, header_value : any, no_loading:any) {
        if(!no_loading) this.showLoadingSpinner();
        let promise = new Promise((resolve, reject) => {
            const httpHeaders = this.setHeader(header_value);
            const url = apiUrl + serviceConfig.ROUTE_PATH + path;
            return this.httpClient.request("POST",url,{body:body,headers:httpHeaders})
                .toPromise()
                .then(response => {
                    resolve(response);
                    this.hideLoadingSpinner();
                })
                .catch(error => {
                    this.handleError(error);
                    reject(error);
                    this.hideLoadingSpinner();
                });
        });
        return promise;
    }

    httpPut(apiUrl:string, serviceConfig : any, path : string, body : any, header_value : any, no_loading:any) {
        if(!no_loading) this.showLoadingSpinner();
        let promise = new Promise((resolve, reject) => {
            const req_body = JSON.stringify(body);
            const httpHeaders = this.setHeader(header_value);
            const url = apiUrl + serviceConfig.ROUTE_PATH + path;
            return this.httpClient.request("PUT",url,{body:req_body,headers:httpHeaders})
                .toPromise()
                .then(response => {
                    resolve(response);
                    this.hideLoadingSpinner();
                })
                .catch(error => {
                    this.handleError(error);
                    reject(error);
                    this.hideLoadingSpinner();
                });
        });
        return promise;
    }

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
