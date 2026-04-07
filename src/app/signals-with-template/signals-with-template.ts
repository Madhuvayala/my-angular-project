import { Component, signal } from '@angular/core';
import { sign } from 'crypto';

@Component({
  selector: 'app-signals-with-template',
  imports: [],
  templateUrl: './signals-with-template.html',
  styleUrl: './signals-with-template.css',
})
export class SignalsWithTemplate {
  count = signal(0);
  isLoggedIn = signal(false);

  items = signal<string[]>(['Angular', 'React', 'Java']);
  addItem() {
    this.items.update(items => [...items, 'html', 'css']);
  }
  role=signal<'admin'|'user'>('user');
  feature=signal<string[]>([
    'dashboard',
    'profile',
    'settings'
  ]);
  makeAdmin() {
    this.role.set('admin');
    this.feature.set([
      'dashboard',
      'profile',
      'settings',
      'admin panel',
      'admin management'
    ]);
  }
  makeUser() {
    this.role.set('user');
    this.feature.set([
     'dashboard',
    'profile',
    'settings'
    ]);
  }
}
