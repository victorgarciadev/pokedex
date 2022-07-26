import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Pokemon } from '../pokemon';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.scss']
})
export class PokemonGridComponent implements OnInit {

  pokemonArray: Array<any> = [];
  poke: any;

  constructor( private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  // getPokemon(): void {
  //   this.ApiService.getAll().then((res) => {
  //       this.pokemonArray = res.results;
  //   }).catch((res) => {
  //     console.log(res);
  //   });
  // }

  getPokemon(): void {
    for (let i = 1; i < 899; i++) {
      // this.poke = this.ApiService.getById(i);
      this.pokemonArray.push(this.ApiService.getById(i));
    }
  }

  // getImage(): void {
  //   this.ApiService.getAll().then((res) => {
  //     this.pokemonArray = res.results;
  //   }).catch((res) => {
  //     console.log(res);
  //   });


  // }
}
