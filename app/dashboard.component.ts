/**
 * Created by skyy on 9/18/16.
 */
import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashbroad.component.html',
    styleUrls: ['app/dashbroad.component.css'],
    providers: [HeroService]
})

export class DashbroadComponent implements OnInit{
    heroes: Hero[] =[];
    constructor(private heroService: HeroService,private router: Router){}
    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0, 4));    }
    gotoDetail(hero: Hero):void {
        let link = ['/detail',hero.id];
        this.router.navigate(link);
    }
}