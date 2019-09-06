import { logging } from 'protractor';

export class tbl_cari_hesap{

    rec_id : number;
    rec_status : number;
    rec_date_added : Date;
    rec_user_added : number;
    rec_date_updated : Date;
    rec_user_updated : number;
    car_kod : string;
    car_adi : string;
    car_tip : number;
    car_sahip_adi : string;
    car_sahip_soyadi : string;
    car_yetkili_adi : string;
    car_musteri_mi : number;
    car_satici_mi : number;
    car_bayi_mi : number;
    car_fatura_adresi : string;
    car_fatura_ilce : string;
    car_fatura_sehir : string;
    car_fatura_ulke : string;
    car_teslim_adres : string;
    car_teslim_ilce : string;
    car_teslim_sehir : string;
    car_teslim_ulke : string;

    car_vergi_dairesi : string;
    car_vergi_numarasi : string;
    car_telefon_numarasi_1 : string;
    car_telefon_numarasi_2 : string;
    car_faks_numarasi : string;
    car_cep_numarasi_1 : string;
    car_cep_numarasi_2 : string;
    car_eposta_1 : string;
    car_eposta_2 : string;
    car_web_sitesi : string;

    car_ozel_kod_1 : string;
    car_ozel_kod_2 : string;
    car_ozel_kod_3 : string;
    car_ozel_kod_4 : string;
    car_ozel_kod_5 : string;
    car_aciklama : string;
    car_odeme_opsiyonu : number;
    car_kilit_tarihi : Date;

    car_banka_1_adi : string;
    car_banka_1_sube_kodu : string;
    car_banka_1_sube_adi : string;
    car_banka_1_hesap_numarasi : string;
    car_banka_1_iban : string;
    car_banka_1_swift : string;

    car_banka_2_adi : string;
    car_banka_2_sube_kodu : string;
    car_banka_2_sube_adi : string;
    car_banka_2_hesap_numarasi : string;
    car_banka_2_iban : string;
    car_banka_2_swift : string;

    car_bolge : string;
    car_grup : string;
    car_borc_limiti : number;
    car_teminat_tutari : number;
    car_ef_durum : number;
    car_ef_urn : string;
    car_efa_eposta : string;
    car_mersis_no : string;
    car_ticaret_sicil_no : string;

}