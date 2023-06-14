import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  productDetails = [
    {
      id: 1,
      productName: "Sticker album.",
      productDescribe: "An sticker album to save moments with your love.",
      productPrice: 9.39,
      productImage:"./assets/img/album.jpg"
    },
    {
      id: 2,
      productName: "Bis Box",
      productDescribe: "A romantic box for Bis chocolates.",
      productPrice: 11.99,
      productImage:"/assets/img/caixa-bis.jpg"
    },
    {
      id: 3,
      productName: "Bag",
      productDescribe: "Personalized bag with love theme.",
      productPrice: 3.39,
      productImage:"/assets/img/sacola.jpg"
    },
    {
      id: 4,
      productName: "Movie theather Box",
      productDescribe: "Box contains candies and drink, includes a game for choose which movie you'll watch.",
      productPrice: 15.29,
      productImage:"/assets/img/caixa-cinema.jpg"
    },
    {
      id: 5,
      productName: "Heart Box",
      productDescribe: "A beautiful heart box to put chocolates.",
      productPrice: 10,
      productImage:"/assets/img/caixa-coracao.jpg"
    },
    {
      id: 6,
      productName: "Explosion Box",
      productDescribe: "Box containing a personalized cup and love messages.",
      productPrice: 11.29,
      productImage:"/assets/img/caixa-explosao-1.jpg"
    },
    {
      id: 7,
      productName: "White explosion Box",
      productDescribe: "Box containing a personalized cup and pictures of couple.",
      productPrice: 11.29,
      productImage:"/assets/img/caixa-explosao-2.png"
    },
    {
      id: 8,
      productName: "Explosion Box Lite",
      productDescribe: "An explosion box to put chocolates.",
      productPrice: 11.29,
      productImage:"/assets/img/caixa-explosao-3.jpg"
    },
    {
      id: 9,
      productName: "Memories Box",
      productDescribe: "Eternalize good moments.",
      productPrice: 13.99,
      productImage:"/assets/img/caixa-memoria.jpg"
    }
  ]
}
