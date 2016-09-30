/**
 * Created by skyy on 9/23/16.
 */
import { Component } from '@angular/core';
import { HeroForm } from './heroform';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html'
})

export class HeroFormComponent{
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new HeroForm(10,'Skyy', this.powers[0],'Chuck Overstreet');
    submitted = false;
    onSubmit(){
        this.submitted = true;
    }
    get diagnostic() { return JSON.stringify(this.model); }
    active: boolean = true;
    newHero(){
        this.model = new HeroForm(42,'','');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}