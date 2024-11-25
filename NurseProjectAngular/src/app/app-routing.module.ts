import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchByNAmeComponent } from './search-by-name/search-by-name.component';

const routes: Routes = [
  {path:'' , component:SearchByNAmeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
