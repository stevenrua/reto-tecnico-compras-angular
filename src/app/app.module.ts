import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponenteModule } from './componente/componente.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { ConfirmarComponent } from './components/confirmar/confirmar.component';

@NgModule({
  declarations: [
    AppComponent,
    //ConfirmarComponent    
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ComponenteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
