import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  pokemonArray: Array<any> = [];
  poke: any;

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    for (let i = 1; i < 1006; i++) {
      this.poke = this.ApiService.getItemById(i);
      console.log(this.poke);
      this.pokemonArray.push(this.poke);
    }
    console.log(this.pokemonArray);
  }

}
