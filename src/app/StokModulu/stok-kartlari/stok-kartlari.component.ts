import { Component, OnInit } from '@angular/core';
import { StokService } from 'src/app/Entity/Service/stok.service';
import { FormGroup, FormControl } from '@angular/forms';

import Swal from 'sweetalert2'
import { tbl_stok_karti } from 'src/app/Entity/Model/tbl_stok_karti';
import { formatDate, DatePipe } from '@angular/common';

@Component({
  selector: 'app-stok-kartlari',
  templateUrl: './stok-kartlari.component.html',
  styleUrls: ['./stok-kartlari.component.css']
})
export class StokKartlariComponent implements OnInit {

  stokListe: any;

  constructor(private stokservice: StokService,) {

  }

  stokgonder = new FormGroup(
    {
      stk_adi: new FormControl(),
      stk_tip: new FormControl(),
      stk_kod: new FormControl(),
    });

  ngOnInit() {
    this.GetStokKarti();
  }

  GetStokKarti()
  {
     this.stokservice.GetStokKarti().subscribe(
      data => {
        console.table('GetStokKarti=', data);
        this.stokListe = data;
      });
  }

  SaveStokKarti(stk_kod, stk_adi, stk_tip,) {

    var ok = '';

    if ((ok == '') && (stk_kod == '')) {
      ok = 'Stok kodu boş geldi lütfen kontrol ediniz !!'
    }

    if ((ok == '') && (stk_adi == '')) {
      ok = 'Stok adı boş geldi lütfen kontrol ediniz !!'
    }

    if ((ok == '') && (stk_tip == '')) {
      ok = 'Stok tipi boş geldi lütfen kontrol ediniz !!'
    }

    if (ok != '') {
      Swal.fire({
        title: 'Hata !!',
        text: ok,
        type: 'error',
        confirmButtonText: 'Vazgeç'
      });
      return;
    }

    if (ok == '') {
      Swal.fire({
        title: 'Uyarı',
        text: "Kayıt yapılsın mı ?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Kaydet'
      }).then((result) => {

        if (result.value) {
          
          //var date = new Date();

          const stk = new tbl_stok_karti();
          stk.stk_kod = stk_kod;
          stk.stk_adi = stk_adi;
          stk.stk_tip = stk_tip;
          stk.rec_status = 0; // 0 ise etkin, 1 ise silinmiş.
          stk.rec_user_added = 1;
          //stk.rec_date_updated = date;
          stk.rec_user_updated = 1;
          stk.rec_id = 0; //kayıt olduğu anlamına geliyor.

          this.stokservice.SaveStokKarti(stk).subscribe(data => {
            if (data == 'ok') {
              console.log('başarılı');
              
              this.GetStokKarti();

              Swal.fire(
                'Başarılı !',
                'Kayıt yapıldı ...',
                'success'
              )
            }
            else {
              console.log('hatalı');
              Swal.fire(
                'Hatalı !',
                'İşlem başarısız ...',
                'error'
              )
            }
          }
        
          );
        }
        

      })
    }
  }

  StokKartSec(rec_id)
  {
    Swal.fire(
      'Seçildi !',
      'rec_id='+rec_id,
      'success'
    )
  }

 StokKartiEkle(){
 } 

}
