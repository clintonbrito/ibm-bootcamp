import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarwarsComponent } from './starwars/starwars.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'starwars', component: StarwarsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
