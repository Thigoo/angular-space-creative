import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private service: OrderDetailsService,
    private scroller: ViewportScroller,
    private route: Router
    ) { }

    scrollToTop() {
      this.scroller.scrollToPosition([0, 0]);
    }

  productData: any;

  ngOnInit(): void {
    this.productData = this.service.productDetails;
  }

}
