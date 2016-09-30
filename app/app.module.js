"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require("@angular/http");
//import for loading and configuring the in-memory web api
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var hero_detail_component_1 = require('./hero-detail.component');
var testmyapp_component_1 = require("./testmyapp.component");
var heroes_component_1 = require("./heroes.component");
var app_routing_1 = require('./app.routing');
var dashboard_component_1 = require("./dashboard.component");
var hero_form_component_1 = require("./hero-form.component");
var click_me_component_1 = require('./click-me.component');
var keyup_component_1 = require('./keyup.component');
var little_tour_component_1 = require('./little-tour.component');
var loop_back_component_1 = require('./loop-back.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, angular2_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                http_1.HttpModule],
            declarations: [app_component_1.AppComponent,
                hero_detail_component_1.HeroDetailComponent,
                testmyapp_component_1.TestComponent,
                heroes_component_1.HeroesComponent,
                dashboard_component_1.DashbroadComponent,
                hero_form_component_1.HeroFormComponent,
                keyup_component_1.KeyUpComponent_v1,
                keyup_component_1.KeyUpComponent_v2,
                keyup_component_1.KeyUpComponent_v3,
                keyup_component_1.KeyUpComponent_v4,
                click_me_component_1.ClickMeComponent,
                little_tour_component_1.LittleTourComponent,
                loop_back_component_1.LoopbackComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map