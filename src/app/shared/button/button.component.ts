import { Component } from '@angular/core';

@Component({
  selector: 'a[appButton],button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    class: 'btn',
  },
})
export class ButtonComponent {}
