import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TeamComponent } from './pages/home/team/team.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'results/:teamCode',
    component: TeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
