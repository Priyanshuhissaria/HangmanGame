//core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';
//constants
import { RouteNames } from './constants/routes.constant';

const routes: Routes = [
  { path: RouteNames.HOME, component: HomeComponent },
  {
    path: RouteNames.GAME,
    component: GameComponent,
    // children: [{ path: 'result', component: ResultComponent }],
  },
  { path: RouteNames.RESULT, component: ResultComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
