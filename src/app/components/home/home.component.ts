import { Component, inject, OnInit } from '@angular/core';
import { MenubarModule } from "primeng/menubar";
import { CarouselModule } from "primeng/carousel";
import { CardModule } from "primeng/card";
import { StyleClassModule } from "primeng/styleclass";
import { Ripple } from "primeng/ripple";
import { Router } from "@angular/router";
import { ButtonDirective } from "primeng/button";
import { DividerModule } from "primeng/divider";

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
    DividerModule
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


  constructor() {}

  ngOnInit() {}
}
