import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cari-hesaplar',
  templateUrl: './cari-hesaplar.component.html',
  styleUrls: ['./cari-hesaplar.component.css']
})
export class CariHesaplarComponent implements OnInit {

  cariListe: any;
  constructor() { }

  cari= new FormGroup(
    {
      rec_id : new FormControl(),
      rec_status :  new FormControl(),
      rec_date_added : new FormControl(),
      rec_user_added : new FormControl(),
      rec_date_updated :new FormControl(),
      rec_user_updated : new FormControl(),
      car_kod : new FormControl(),
      car_adi : new FormControl(),
      car_tip : new FormControl(),
      car_sahip_adi : new FormControl(),
      car_sahip_soyadi : new FormControl(),
      car_yetkili_adi : new FormControl(),
      car_musteri_mi : new FormControl(),
      car_satici_mi : new FormControl(),
      car_bayi_mi : new FormControl(),
      car_fatura_adresi : new FormControl(),
      car_fatura_ilce : new FormControl(),
      car_fatura_sehir : new FormControl(),
      car_fatura_ulke : new FormControl(),
      car_teslim_adres : new FormControl(),
      car_teslim_ilce : new FormControl(),
      car_teslim_sehir : new FormControl(),
      car_teslim_ulke : new FormControl(),
  
      car_vergi_dairesi : new FormControl(),
      car_vergi_numarasi : new FormControl(),
      car_telefon_numarasi_1 : new FormControl(),
      car_telefon_numarasi_2 : new FormControl(),
      car_faks_numarasi : new FormControl(),
      car_cep_numarasi_1 : new FormControl(),
      car_cep_numarasi_2 : new FormControl(),
      car_eposta_1 : new FormControl(),
      car_eposta_2 : new FormControl(),
      car_web_sitesi : new FormControl(),
  
      car_ozel_kod_1 : new FormControl(),
      car_ozel_kod_2 : new FormControl(),
      car_ozel_kod_3 : new FormControl(),
      car_ozel_kod_4 : new FormControl(),
      car_ozel_kod_5 : new FormControl(),
      car_aciklama : new FormControl(),
      car_odeme_opsiyonu : new FormControl(),
      car_kilit_tarihi : new FormControl(),
  
      car_banka_1_adi : new FormControl(),
      car_banka_1_sube_kodu : new FormControl(),
      car_banka_1_sube_adi : new FormControl(),
      car_banka_1_hesap_numarasi : new FormControl(),
      car_banka_1_iban : new FormControl(),
      car_banka_1_swift : new FormControl(),
  
      car_banka_2_adi : new FormControl(),
      car_banka_2_sube_kodu : new FormControl(),
      car_banka_2_sube_adi : new FormControl(),
      car_banka_2_hesap_numarasi : new FormControl(),
      car_banka_2_iban : new FormControl(),
      car_banka_2_swift : new FormControl(),
  
      car_bolge : new FormControl(),
      car_grup : new FormControl(),
      car_borc_limiti : new FormControl(),
      car_teminat_tutari : new FormControl(),
      car_ef_durum : new FormControl(),
      car_ef_urn : new FormControl(),
      car_efa_eposta : new FormControl(),
      car_mersis_no : new FormControl(),
      car_ticaret_sicil_no : new FormControl()
  
    }

  );


  ngOnInit() {
  }

}
