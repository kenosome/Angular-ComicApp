import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService,Hero } from '../../services/heroes/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero:Hero;

  constructor(private _activatedRoute:ActivatedRoute, private _heroesService:HeroesService) { 

  }

  ngOnInit() {
    this.getHero();
  }

  getHero(){
    this._activatedRoute.params.subscribe(params=>{

      //console.log(`params[id] = ${params['id']}`);
      this.hero = this._heroesService.getHero(params['id']);
      //console.log(`hero = ${JSON.stringify(this.hero)}`);

    });
  }

}
