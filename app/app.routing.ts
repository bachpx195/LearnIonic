/**
 * Created by skyy on 9/18/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from "./heroes.component";
import {DashbroadComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";

const appRoutes: Routes = [{
        path: '',
        redirectTo: 'dashbroad',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashbroad',
        component: DashbroadComponent
    },{
        path:'detail/:id',
        component: HeroDetailComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);