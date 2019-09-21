import { Injectable } from '@angular/core';
import { ServiceConfig } from "../../config";
import { HttpService } from "../../services";
import { CommonMapService } from '../mapping-services';
import { catchError, map } from "rxjs/operators";
import { _throw } from "rxjs/observable/throw";

@Injectable()
export class VendorService {

  constructor(private httpService : HttpService, private commonMap: CommonMapService) {}

  // POST
  public getVendorListByCategoryId(categoryId){
    const path = `/details?wedding_category_id=${categoryId}`;
    return this.httpService.httpGet(ServiceConfig.VENDOR_MANAGEMENT_SERVICE, path, null, false).pipe(
      map(
        (res: any) => {
          // res.data = res.data.map(item =>
          //   this.vendorMap.mapVendor(item)
          // );
          return res;
        }
      ),
      catchError(
        (error: any) =>
          _throw(error)
      ));
  }

}
