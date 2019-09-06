import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { tbl_tanim } from '../Model/tbl_tanim';

import { map, catchError } from  'rxjs/operators';
import { Observable,  pipe, throwError, of } from 'rxjs';

@Injectable()

export class StockService {

    constructor(private http : HttpClient, private router : Router)
    {

    }

    errorHandler(error : Response)
    {
       console.log('hatakodu=', error);
       return throwError(error);
    }


    GetStockItem()
    {
        return this.http.get(environment.base_url+'/api/stok/getstok', {responseType : 'json'});
    }


    SaveTanimView(tanimview)
    {
        const tbltanim = new tbl_tanim();
        tbltanim.aciklama = tanimview.aciklama;
        tbltanim.kod_id = tanimview.kod_id;
        tbltanim.tutar = tanimview.tutar;
        if (tbltanim.kod_id == undefined) { tbltanim.kod_id=0;}
        
        console.log('tbltanim=', tbltanim);

        var header = new HttpHeaders();
        header.append('Content-Type', 'application/json');

        return this.http.post(environment.base_url+'/api/carihesap/savetbltanim', tbltanim, {headers : header })
        .pipe(
           map(res => res),
           catchError(this.errorHandler)
        );
    }


}