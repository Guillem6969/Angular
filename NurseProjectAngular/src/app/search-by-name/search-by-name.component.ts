import { Component } from '@angular/core';
import jsonData from '../data/DATA.json';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrl: './search-by-name.component.css'
})

export class SearchByNAmeComponent {

  users: any[] = jsonData;

  searchName = new FormGroup({
    name: new FormControl('')
  });

  searched: boolean = false;
  nameSearched: String = ''; 

  submitSearch(){
    this.searched = false;
    this.nameSearched = '';

    this.users.forEach((user) => {
      if(this.searchName.value.name === user.first_name){
        this.searched = true;
        this.nameSearched = user.first_name;
      }
    })

    if(!this.searched){
      console.log("NO ENCONTRADO")
    }

  }
}
