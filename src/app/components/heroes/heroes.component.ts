import { Component, OnInit } from '@angular/core';
import { HeroesService,Hero } from '../../services/heroes/heroes.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  _heroes:Hero[] = [];
  _terminoBusqueda:string;
  

  constructor(private _heroesService:HeroesService, 
              private _routerService:Router,
              private _activatedRoute:ActivatedRoute) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('OnInit');
    this._activatedRoute
                    .queryParams
                    .subscribe(params => {
                      if(params['busqueda']){
                        this._heroes = this._heroesService.getHeroesByName(params['busqueda']);
                      }
                      else{
                        this._heroes = this._heroesService.getHeroes();
                      }
                    });
    console.log(this._heroes);
  }

  verHero(idHero:number){
    console.log(`verHero(${idHero})`);
    this._routerService.navigate(['hero/',idHero]);
  }

}
