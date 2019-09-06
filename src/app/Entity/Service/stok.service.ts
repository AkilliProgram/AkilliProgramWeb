import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { tbl_stok_karti } from '../Model/tbl_stok_karti';
import { map, catchError } from 'rxjs/operators';

export class StokService {
    constructor(private http : HttpClient, private router : Router){

    }

    errorHandler(error : Response){
        console.log('hatakodu=', error);
        return throwError(error);
    }

    GetStokKarti(){
        return this.http.get(environment.base_url+'/api/stok/getstok', {responseType : 'json'})
    }

    SaveStokKarti(stk : tbl_stok_karti){

        var header = new HttpHeaders();
        header.append('Content-Type', 'application/json');

        return this.http.post(environment.base_url+'/api/stok/savestokkarti', stk, {headers : header })
        .pipe(
           map(res => res),
           catchError(this.errorHandler)
        );



    }
}
