import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello1',
  template: `<h1>Hello {{name1}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name1: string;
}
