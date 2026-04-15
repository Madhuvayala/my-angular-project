import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-route-params-two',
  imports: [],
  templateUrl: './route-params-two.html',
  styleUrl: './route-params-two.css',
})
export class RouteParamsTwo {
category!: string;
sort!: string;
constructor(private route: ActivatedRoute) {
  this.route.queryParamMap.subscribe(params => {
    this.category = params.get('catogory') || '';
    this.sort = params.get('sort') || '';
  });
}
}
