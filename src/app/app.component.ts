import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  NgZone,
  OnChanges,
  SimpleChanges,
  VERSION,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  BehaviorSubject,
  combineLatest,
  map,
  tap,
  zip,
  debounceTime,
} from 'rxjs';
import { HelloComponent } from './hello.component';
import { PokemonCardDirective } from './pokemon-card.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, HelloComponent, CommonModule, PokemonCardDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  testHello() {
    console.count('hello');
  }
}
