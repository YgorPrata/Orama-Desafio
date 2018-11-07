import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { LegendaComponent } from './legenda/legenda.component';
import { ConteudoInvestimentosComponent } from './conteudo-investimentos/conteudo-investimentos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BarraPesquisaComponent,
    FiltrosComponent,
    LegendaComponent,
    ConteudoInvestimentosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
