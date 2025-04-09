import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
})
export class CTAComponent {}
