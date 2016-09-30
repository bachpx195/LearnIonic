/**
 * Created by skyy on 9/11/16.
 */
import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService} from './hero.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css'],
    providers: [HeroService]
})
export class HeroDetailComponent implements OnInit{
    @Input()
    hero: Hero;
    saveSussecc: boolean = false;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ){}
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }
    goBack(): void {
        window.history.back();
    }
    sussecc(): void{
        this.saveSussecc = true;
    }
    save(): void {
        this.heroService.update(this.hero)
            .then(this.sussecc)
            .then(this.goBack);
    }
}
