/**
 * Created by skyy on 9/18/16.
 */
import {Component} from '@angular/core'

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    <test-my-app></test-my-app>
    <key-up1></key-up1>
    <key-up2></key-up2>
    <key-up3></key-up3>
    <key-up4></key-up4>
    <little-tour></little-tour>
    <click-me></click-me>
    <hero-form></hero-form>
  `,
    styleUrls: ['app/app.component.css'],
})

export class AppComponent{
    title = 'Tour of Hero by Skyy';
}