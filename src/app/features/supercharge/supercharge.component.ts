import { Component } from '@angular/core';

interface Item {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-supercharge',
  standalone: true,
  imports: [],
  templateUrl: './supercharge.component.html',
  styleUrl: './supercharge.component.scss',
})
export class SuperchargeComponent {
  items: Item[] = [
    {
      title: 'Create Blacklists',
      description:
        'Easily search your snippets by content, category, web address, application, and more.',
      image: 'icon-blacklist.svg',
    },
    {
      title: 'Plain Texxt Snippets',
      description:
        'Remove unwanted formatting from copied text for a consistent look.',
      image: 'icon-text.svg',
    },
    {
      title: 'Sneak Preview',
      description:
        'Quick preview of all snippets on your Clipboard for easy access.',
      image: 'icon-preview.svg',
    },
  ];
}
