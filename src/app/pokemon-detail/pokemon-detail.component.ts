import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: any;

  constructor( private route: ActivatedRoute, private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const string = String(this.route.snapshot.paramMap.get('name'));
    this.pokemon = this.ApiService.getByName(string);
  }
  

}
