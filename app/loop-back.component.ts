/**
 * Created by skyy on 9/23/16.
 */
import { Component } from '@angular/core';
@Component({
    selector: 'loop-back',
    template: `
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent { }