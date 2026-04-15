import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-params-one',
  imports: [],
  templateUrl: './route-params-one.html',
  styleUrl: './route-params-one.css',
})
export class RouteParamsOne {
productId!: string;

constructor(private route: ActivatedRoute) {
  // this.productId = this.route.snapshot.paramMap.get('id') || '';
  this.route.params.subscribe(params => {
    this.productId = params['id'];
  });
}
}
