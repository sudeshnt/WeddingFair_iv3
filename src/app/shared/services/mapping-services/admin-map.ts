import { Injectable } from '@angular/core';

@Injectable()
export class AdminMap {

  constructor() {}

   mapLoginResponse(data){
      let response = {
        "adminId": data.adminId || 0,
        "status": data.status || 0,
        "errorMessage": data.errorMessage ||  null,
        "name": data.name || null,
        "shopId": data.shopId || 0,
        "branchId": data.branchId || 0,
        "shopName": data.shopName || null,
        "motto": data.motto || null,
        "sessionId": data.sessionId || null,
        "firstTime": data.firstTime || null,
        "shopImage": data.shopImage || null,
        "entitlements": data.entitlements || [],
        "superAdmin": data.superAdmin || false,
        "xAdmin": data.xAdmin || false,
        "branches": [],
        "shopType": data.shopType || 0,
        "shopCategory": data.shopCategory || 0,
        "shopCurrency": data.shopCurrency || null,
        "preparationPoint": data.preparationPoint || 0,
        "servingPoint": data.servingPoint || 0,
        "consumingPoint": data.consumingPoint || 0
      };
      return response;
   }

}
