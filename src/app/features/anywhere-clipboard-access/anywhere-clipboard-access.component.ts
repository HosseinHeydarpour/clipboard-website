import { Component } from '@angular/core';

@Component({
  selector: 'app-anywhere-clipboard-access',
  standalone: true,
  imports: [],
  templateUrl: './anywhere-clipboard-access.component.html',
  styleUrl: './anywhere-clipboard-access.component.scss',
})
export class AnywhereClipboardAccessComponent {
  sectionData = {
    title: 'Access Clipboard Anywhere',
    description:
      "Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.",
  };
}
