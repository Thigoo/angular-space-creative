import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: OrderDetailsService) { }

  getProductId: any;
  productData: any;

  ngOnInit(): void {
    this.getProductId = this.param.snapshot.paramMap.get('id');
    if (this.getProductId) {
      this.productData = this.service.productDetails.filter((product) => product.id == this.getProductId)
    }
  }

}
