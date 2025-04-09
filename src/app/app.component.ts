import { Component } from '@angular/core';
import { HeroComponent } from './features/hero/hero.component';
import { SnippetsComponent } from './features/snippets/snippets.component';
import { FeaturesComponent } from './features/features/features.component';
import { AnywhereClipboardAccessComponent } from './features/anywhere-clipboard-access/anywhere-clipboard-access.component';
import { SuperchargeComponent } from './features/supercharge/supercharge.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    SnippetsComponent,
    FeaturesComponent,
    AnywhereClipboardAccessComponent,
    SuperchargeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clipborad-website';
}
