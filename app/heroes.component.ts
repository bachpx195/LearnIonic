import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit{
    heroes: Hero[];
    constructor(private router: Router,private heroService: HeroService) {
        // this.heroes = this.heroService.getHeroes();
    };
    title = 'Tour of Hero by skyy';
    selectedHero: Hero;
    // heroes = HEROES;
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    selectHero(hero: Hero): void {
        this.selectedHero = hero;
    }
    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }
}