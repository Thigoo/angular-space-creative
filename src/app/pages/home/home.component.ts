import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: OrderDetailsService,
    private scroller: ViewportScroller,
    private router: Router
    ) { }

    scrollToTop() {
      this.scroller.scrollToPosition([0, 0]);
      this.router.navigate(['/menu']);
    }

  productData: any;

  ngOnInit(): void {
    this.productData = this.service.productDetails;
  }

}
