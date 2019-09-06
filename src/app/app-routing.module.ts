import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StokKartlariComponent } from './StokModulu/stok-kartlari/stok-kartlari.component';
import { HomeComponent } from './home/home.component';
import { CariHesaplarComponent } from './CariModulu/cari-hesaplar/cari-hesaplar.component';
import { TanimviewComponent } from './CariModulu/tanimview/tanimview.component';
import { YeniStokKartiComponent } from './StokModulu/yeni-stok-karti/yeni-stok-karti.component';
 


const routes: Routes = 
[
    {  path:'', component : HomeComponent },
    {  path:'home', component : HomeComponent },
    {  path:'stokkart', component : StokKartlariComponent },
    {  path:'carihesaplar', component : CariHesaplarComponent },
    {  path:'caritanim', component : TanimviewComponent },
    {  path:'yenistokkarti', component : YeniStokKartiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
