import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tbl_cari_hesap } from '../Model/tbl_cari_hesap';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class CariService {
    constructor(private http : HttpClient, private router : Router){

    }

    errorHandler(error : Response)
    {
       console.log('hatakodu=', error);
       return throwError(error);
    }


    SaveCariHesapKarti(cari){
        
        const cari_hesap = new tbl_cari_hesap;
        cari_hesap.rec_id = cari.rec_id;
        cari_hesap.rec_status = cari.rec_status;
        cari_hesap.rec_date_added = cari.rec_date_added;
        cari_hesap.rec_user_added = cari.rec_user_added;
        cari_hesap.rec_date_updated = cari.rec_date_updated;
        cari_hesap.rec_user_updated = cari.rec_user_updated;

        cari_hesap.car_kod = cari.car_kod;
        cari_hesap.car_adi = cari.car_adi;
        cari_hesap.car_tip = cari.car_tip;
        cari_hesap.car_sahip_adi = cari.car_sahip_adi;
        cari_hesap.car_sahip_soyadi = cari.car_sahip_soyadi;
        cari_hesap.car_yetkili_adi = cari.car_yetkili_adi;
        cari_hesap.car_musteri_mi = cari.car_müsteri_mi;
        cari_hesap.car_satici_mi = cari.car_satici_mi;
        cari_hesap.car_bayi_mi = cari.car_bayi_mi;

        cari_hesap.car_fatura_adresi = cari.car_fatura_adresi;
        cari_hesap.car_fatura_ilce = cari.car_fatura_ilce;
        cari_hesap.car_fatura_sehir = cari.car_fatura_sehir;
        cari_hesap.car_fatura_ulke = cari.car_fatura_ulke;

        cari_hesap.car_vergi_dairesi = cari.car_vergi_dairesi;
        cari_hesap.car_vergi_numarasi = cari.car_vergi_numarasi;

        cari_hesap.car_telefon_numarasi_1 = cari.car_telefon_numarasi_1;
        cari_hesap.car_telefon_numarasi_2 = cari.car_telefon_numarasi_2;
        cari_hesap.car_faks_numarasi = cari.car_faks_numarasi;
        cari_hesap.car_cep_numarasi_1 = cari.car_cep_numarasi_1;
        cari_hesap.car_cep_numarasi_2 = cari.car_cep_numarasi_2;
        cari_hesap.car_eposta_1 = cari.car_eposta_1;
        cari_hesap.car_eposta_2 = cari.car_eposta_2;
        cari_hesap.car_web_sitesi = cari.car_web_sitesi;

        cari_hesap.car_ozel_kod_1 = cari.car_ozel_kod_1;
        cari_hesap.car_ozel_kod_2 = cari.car_ozel_kod_2;
        cari_hesap.car_ozel_kod_3 = cari.car_ozel_kod_3;
        cari_hesap.car_ozel_kod_4 = cari.car_ozel_kod_4;
        cari_hesap.car_ozel_kod_5 = cari.car_ozel_kod_5;
        cari_hesap.car_aciklama = cari.car_aciklama;
        cari_hesap.car_odeme_opsiyonu = cari.car_odeme_opsiyonu;
        cari_hesap.car_kilit_tarihi = cari.car_kilit_tarihi;

        cari_hesap.car_banka_1_adi = cari.car_banka_1_adi;
        cari_hesap.car_banka_1_sube_kodu = cari.car_banka_1_sube_kodu;
        cari_hesap.car_banka_1_sube_adi = cari.car_banka_1_sube_adi;
        cari_hesap.car_banka_1_hesap_numarasi = cari.car_banka_1_hesap_numarasi;
        cari_hesap.car_banka_1_iban = cari.car_banka_1_iban;
        cari_hesap.car_banka_1_swift = cari.car_banka_1_swift;

        cari_hesap.car_banka_2_adi = cari.car_banka_2_adi;
        cari_hesap.car_banka_2_sube_kodu = cari.car_banka_2_sube_kodu;
        cari_hesap.car_banka_2_sube_adi = cari.car_banka_2_sube_adi;
        cari_hesap.car_banka_2_hesap_numarasi = cari.car_banka_2_hesap_numarasi;
        cari_hesap.car_banka_2_iban = cari.car_banka_2_iban;
        cari_hesap.car_banka_2_swift = cari.car_banka_2_swift;

        cari_hesap.car_bolge = cari.car_bolge;
        cari_hesap.car_grup = cari.car_grup;
        cari_hesap.car_borc_limiti = cari.car_borc_limiti;
        cari_hesap.car_teminat_tutari = cari.car_teminat_tutari;
        cari_hesap.car_ef_durum = cari.car_ef_durum;
        cari_hesap.car_ef_urn = cari.car_ef_urn;
        cari_hesap.car_efa_eposta = cari.car_efa_eposta;
        cari_hesap.car_mersis_no = cari.car_mersis_no;
        cari_hesap.car_ticaret_sicil_no = cari.car_ticaret_sicil_no;

        if(cari.rec_id == undefined) {cari.rec_id =0}

        var header = new HttpHeaders();
        header.append('Content-Type', 'application/json');

        return this.http.post(environment.base_url+'/api/carihesap/savecarihesapkarti', cari, {headers : header })
        .pipe(
           map(res => res),
           catchError(this.errorHandler)
        );

    }
}
