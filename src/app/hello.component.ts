import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  imports: [FormsModule],
  standalone: true,
})
export class HelloComponent {
  @Input() name: string;
}
