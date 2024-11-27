import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchByNAmeComponent } from './search-by-name/search-by-name.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'searchbyname' , component:SearchByNAmeComponent},
  {path:'login' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
