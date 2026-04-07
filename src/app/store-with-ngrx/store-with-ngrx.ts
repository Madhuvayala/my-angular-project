import { Component } from '@angular/core';
import { CounterStore } from '../core/counter';
import { UserStore } from '../core/store/user';

@Component({
  selector: 'app-store-with-ngrx',
  imports: [],
  templateUrl: './store-with-ngrx.html',
  styleUrl: './store-with-ngrx.css',
})
export class StoreWithNgrx {

  constructor(
    public counterStore:CounterStore,
     public userStore:UserStore
    ){}

}
