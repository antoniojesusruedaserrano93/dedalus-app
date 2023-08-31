import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageClientDetailComponent } from './pages/page-client-detail/page-client-detail.component';
import { ClientListComponent } from './components/client-list/client-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    PageHomeComponent,
    PageClientDetailComponent,
    ClientListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
