import { Component } from '@angular/core';

interface Logo {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  logos: Logo[] = [
    {
      src: 'logo-google.png',
      alt: '',
    },
    {
      src: 'logo-ibm.png',
      alt: '',
    },
    {
      src: 'logo-microsoft.png',
      alt: '',
    },
    {
      src: 'logo-hp.png',
      alt: '',
    },
    {
      src: 'logo-vector-graphics.png',
      alt: '',
    },
  ];
}
