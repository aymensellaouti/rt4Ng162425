import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { TwoComponent } from './components/two/two.component';
import { SecondComponent } from './components/second/second.component';
import { APP_ROUTES } from './config/app-routes.config';
import { GameComponent } from './components/game/game.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './form/test-form/test-form.component';

const routes: Routes = [
  { path: APP_ROUTES.home, component: FirstComponent},
  { path: APP_ROUTES.two, component: TwoComponent},
  { path: APP_ROUTES.game, component: GameComponent},
  { path: 'second', component: SecondComponent},
  { path: 'form', component: TestFormComponent},
  // lazmek etmatchi ay uri metkawna men segment wa7ed
  { path: ':isOpen', component: NgClassComponent},
  // ki takhlet lahna affichi el component haka rani nmatchi kol chay
  { path: '**', component: NF404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
