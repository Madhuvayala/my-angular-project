import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profiles',
  imports: [RouterLink],
  templateUrl: './profiles.html',
  styleUrl: './profiles.css',
})
export class Profiles {
canDeactivate(){
  return confirm("Are you sure you want to leave this page?");
}
}
