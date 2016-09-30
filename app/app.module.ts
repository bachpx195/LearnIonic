import {NgModule, Component}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";

//import for loading and configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service'
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail.component';
import {TestComponent} from "./testmyapp.component";
import {HeroesComponent} from "./heroes.component";
import {routing} from './app.routing';
import {DashbroadComponent} from "./dashboard.component";
import {HeroFormComponent} from "./hero-form.component";
import {ClickMeComponent} from './click-me.component';
import {
    KeyUpComponent_v1,
    KeyUpComponent_v2,
    KeyUpComponent_v3,
    KeyUpComponent_v4
} from './keyup.component';
import {LittleTourComponent} from './little-tour.component';
import {LoopbackComponent} from './loop-back.component';

@NgModule({
    imports: [BrowserModule, FormsModule, routing, InMemoryWebApiModule.forRoot(InMemoryDataService),
        HttpModule],
    declarations: [AppComponent,
        HeroDetailComponent,
        TestComponent,
        HeroesComponent,
        DashbroadComponent,
        HeroFormComponent,
        KeyUpComponent_v1,
        KeyUpComponent_v2,
        KeyUpComponent_v3,
        KeyUpComponent_v4,
        ClickMeComponent,
        LittleTourComponent,
        LoopbackComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}