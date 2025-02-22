import { Component } from '@angular/core';
import {UpperCasePipe} from '@angular/common';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    UpperCasePipe,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'AngularApp';

}
