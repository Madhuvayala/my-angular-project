import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  count = 0;
  increce() {
    console.log(this.count)
    this.count++
  }
  showEvent(e: any) {
    console.log(e)
  }
  isUerName = '';
  updateUser(value: string) {

    this.isUerName = value
    console.log(value)

  }
}
