import { Injectable } from '@angular/core';

@Injectable()
export class CategoryMap {

  constructor() {}

   mapServiceCategory(data){
      let response = {
        "categoryId": data.categoryId || 0,
        "categoryName": data.categoryName || ""
      };
      return response;
   }

}
