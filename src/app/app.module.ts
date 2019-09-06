import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StokKartlariComponent } from './StokModulu/stok-kartlari/stok-kartlari.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StokService} from './Entity/Service/stok.service';
import { CariHesaplarComponent } from './CariModulu/cari-hesaplar/cari-hesaplar.component';
import { TanimviewComponent } from './CariModulu/tanimview/tanimview.component';
import { CariService } from './Entity/Service/cari.service';
import { YeniStokKartiComponent } from './StokModulu/yeni-stok-karti/yeni-stok-karti.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    StokKartlariComponent,
    DashboardComponent,
    CariHesaplarComponent,
    TanimviewComponent,
    YeniStokKartiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [StokService, CariService],
  bootstrap: [AppComponent]
})
export class AppModule { }
