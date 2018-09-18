import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Norton } from '../norton';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'SuperNorton'
  };



  heroes : Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  
  
  //   supernorton: Norton = {
  //   nome: "Super Norton!",
  //   idade: 23,
  //   nacionalidade: "Holandes"
  // };
  

  constructor(private heroService: HeroService) { }

  ngOnInit() {

    this.getHeroes();

  }

  getHeroes(){
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}