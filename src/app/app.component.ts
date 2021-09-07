import { Component } from '@angular/core';

@Component({
  selector: 'xyz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app2.css']
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
