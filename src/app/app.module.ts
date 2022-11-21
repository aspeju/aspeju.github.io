import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { RedesSociaisComponent } from './components/redes-sociais/redes-sociais.component';
import { PainelComponent } from './components/painel/painel.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RedesSociaisComponent,
    PainelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
