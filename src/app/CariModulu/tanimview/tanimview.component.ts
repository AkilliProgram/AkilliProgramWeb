import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StockService } from 'src/app/Entity/Service/stock.service';

@Component({
  selector: 'app-tanimview',
  templateUrl: './tanimview.component.html',
  styleUrls: ['./tanimview.component.css']
})
export class TanimviewComponent implements OnInit {

  tanimview = new FormGroup(
  {
      kod_id : new FormControl(),
      aciklama : new FormControl(),
      tutar : new FormControl()
  });

  constructor(private stockservice : StockService ) { }

  ngOnInit() {

    // this.tanimview.patchValue({
    //   kod_id : '1',
    //   aciklama : '123',
    //   tutar : '58'
    // });

  }

  SaveTanimView(tanimview)
  {
     console.log('kayıt verisi=', tanimview);
     this.stockservice.SaveTanimView(tanimview).subscribe(data => {
       if (data == 'ok')
       {
         console.log('başarılı');
       }
       else
       {
        console.log('hatalı');
       }
     });
  }
}
