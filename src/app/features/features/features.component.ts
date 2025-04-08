import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Feature {
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      title: 'Quick Search',
      description:
        'Easily search your snippets by content, category, web address, application, and more.',
    },
    {
      title: 'iCloud Sync',
      description:
        'Instantly saves and syncs snippets across all your devices.',
    },
    {
      title: 'Colmpletely History',
      description:
        'Retrieve any snippets from the first moment you started using the app.',
    },
  ];
}
