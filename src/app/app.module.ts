import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms';
import { PereComponent } from './communinicationInterComonents/pere/pere.component';
import { FilsComponent } from './communinicationInterComonents/fils/fils.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BtcToUsdPipe } from './pipes/btc-to-usd.pipe';
import { LoggerService } from './services/logger.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GameComponent } from './components/game/game.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './form/test-form/test-form.component';
import { TestObservableComponent } from './rxjs/test-observable/test-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    TwoComponent,
    PereComponent,
    FilsComponent,
    NgStyleComponent,
    NgClassComponent,
    HighlightDirective,
    BtcToUsdPipe,
    NavbarComponent,
    GameComponent,
    NF404Component,
    TestFormComponent,
    TestObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
