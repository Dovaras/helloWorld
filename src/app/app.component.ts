import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./header/header.component.css'],
  // template: `...
  // `,
  template:`
<app-header></app-header>
<div class="container">
<p>Hello world</p>
<button>Hi ---</button>
<pre>[ vardas: "Jonas" ]</pre>

<p>{{ title }}</p>
<p>{{ subtitle }}</p>
<p>{{ title + " " + subtitle}}</p>
<p>2 + 2 = {{ 2 + 2 }}</p>
<p>5 + 10 = {{ firstNumber + secondNumber }}</p>

<br>
<p>Example with incrementation button</p>
<p>{{ counter }}</p>
<!--<button (click)="counter = counter + 1">Click me</button>-->
<button (click)=clickHandlerPlus()>Click me+</button>
<button (click)=clickHandlerMinus()>Click me-</button>

<div>
`,
  styles: ['p {color: salmon;} ', 'button { background-color: green; }'],
})
export class AppComponent {
  title = 'helloWorld';
  subtitle = 'This is an amazing application';
  firstNumber = 5;
  secondNumber = 10;

  counter = 0;
  clickHandlerPlus() {
    this.counter++;
  }
  clickHandlerMinus() {
    this.counter--;
  }
}
