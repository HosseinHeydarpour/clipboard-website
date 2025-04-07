import { Component } from '@angular/core';
import { HeroComponent } from './features/hero/hero.component';
import { SnippetsComponent } from './features/snippets/snippets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, SnippetsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clipborad-website';
}
