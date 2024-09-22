import { Component, inject, OnInit } from '@angular/core';
import { MenubarModule } from "primeng/menubar";
import { CarouselModule } from "primeng/carousel";
import { CardModule } from "primeng/card";
import { StyleClassModule } from "primeng/styleclass";
import { Ripple } from "primeng/ripple";
import { Router } from "@angular/router";
import { Button, ButtonDirective } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { DataViewModule } from "primeng/dataview";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenubarModule,
    CarouselModule,
    CardModule,
    StyleClassModule,
    Ripple,
    ButtonDirective,
    DividerModule,
    DataViewModule,
    Button
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  router: any = inject(Router);

  featuredProducts!: any[];
  categories!: any[];
  cartItems!: number;
  isLoggedIn!: boolean;
  products: any[] | undefined;
  sortField: string | undefined;
  sortOrder: unknown;


  constructor() {}

  ngOnInit() {
    this.products = [
      {
        "id": "1000",
        "code": "f230fh0g3",
        "name": "Wernards CBD OK 7%",
        "description": "Full spectrum CBD oil ",
        "image": "CBDOK7_5ml-300x300.webp",
        "price": 14,
        "category": "CBD olaj",
        "quantity": 0,
        "inventoryStatus": "OUTOFSTOCK",
        "rating": 5
      },
      {
        "id": "1001",
        "code": "nvklal433",
        "name": "Wernards CBD Golyoli 3%",
        "description": "Full spectrum CBD olaj",
        "image": "golyoli3_5ml-300x300.webp",
        "price": 18,
        "category": "CBD olaj",
        "quantity": 61,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "1002",
        "code": "zz21cz3c1",
        "name": "Blue Band",
        "description": "Product Description",
        "image": "blue-band.jpg",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "1003",
        "code": "244wgerg2",
        "name": "Blue T-Shirt",
        "description": "Product Description",
        "image": "blue-t-shirt.jpg",
        "price": 29,
        "category": "Clothing",
        "quantity": 25,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1004",
        "code": "h456wer53",
        "name": "Bracelet",
        "description": "Product Description",
        "image": "bracelet.jpg",
        "price": 15,
        "category": "Accessories",
        "quantity": 73,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
    ]
  }

  addToCart(id:string) {
    console.log(id);
  }
}
