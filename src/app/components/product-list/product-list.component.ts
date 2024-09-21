import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { CardModule } from "primeng/card";
import { CurrencyPipe, NgForOf } from "@angular/common";
import { ButtonDirective } from "primeng/button";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CardModule,
    CurrencyPipe,
    ButtonDirective,
    NgForOf
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  apiService = inject(ApiService);

  products: any[] = [];

  constructor() {}

  ngOnInit() {
    this.apiService.getProducts().subscribe(
        (data: any) => {
          this.products = data.products;
        }
    )
  }

}
