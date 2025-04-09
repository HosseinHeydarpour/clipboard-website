import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  href: string;
}

interface Menu {
  menu_name: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  menus: Menu[] = [
    {
      menu_name: 'Menu 1',
      items: [
        {
          label: 'FAQs',
          href: '',
        },
        {
          label: 'Contact Us',
          href: '',
        },
      ],
    },
    {
      menu_name: 'Menu 2',
      items: [
        {
          label: 'Privacy Policy',
          href: '',
        },
        {
          label: 'Press Kit',
          href: '',
        },
      ],
    },
    {
      menu_name: 'Menu 3',
      items: [
        {
          label: 'Install Guide',
          href: '',
        },
      ],
    },
  ];

  socialLogos = [
    {
      src: 'icon-facebook.svg',
      alt: 'Facebook logo',
    },
    {
      src: 'icon-instagram.svg',
      alt: 'Instagram logo',
    },
    {
      src: 'icon-twitter.svg',
      alt: 'Twitter logo',
    },
  ];
}
