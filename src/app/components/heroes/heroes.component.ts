import { Component } from '@angular/core';
import { data_heroe } from '../../Helpers/data_heroe';
import { IHeroe, IHeroeMain } from '../../interface/IHeroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  heroe_main: IHeroeMain = {
    id: 0,
    name: "Gastón",
    name_heroe: "Anonimato",
    IMG: "https://avatars.githubusercontent.com/u/104409051?v=4",
    URL: "https://www.linkedin.com/in/bailador93/"
  };

  heroes = data_heroe;

  heroe_selected: any;

  search_heroe: string = "";

  result_search: IHeroe[] = [];

  isEmpty: boolean = false;

  isListEmpty: boolean = false;

  onViewDetailHeroe(heroe: IHeroe): void {
    // console.log(heroe);

    this.heroe_selected = heroe;
    this.search_heroe = "";
    this.result_search = [];
    this.isEmpty = false;
    this.isListEmpty = false;

    // alert(`
    //   ID: ${heroe.id + 1} 
    //   Name: ${heroe.name} 
    //   Heroe: ${heroe.name_heroe} 
    // `);
  }


  onBtnSearchHeroe(): void {
    // console.log(this.search_heroe);
    //console.log(this.heroes.filter(e => e.name_heroe.toLowerCase().includes(this.search_heroe.toLowerCase())))

    if (this.search_heroe.trim() === "") {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;

      let result = this.heroes.filter(e => e.name_heroe.toLowerCase().includes(this.search_heroe.toLowerCase()));

      if (result.length === 0) {
        this.isListEmpty = true;

      } else {
        this.isListEmpty = false;
        this.result_search = result;
      }

    }


  }

}
