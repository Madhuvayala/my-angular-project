import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from '../header/header';

@Component({
  selector: 'app-build-home',
  imports: [RouterOutlet,Header],
  templateUrl: './build-home.html',
  styleUrl: './build-home.css',
})
export class BuildHome {

}
