import { Component, inject } from '@angular/core';
import { ButtonDirective } from "primeng/button";
import { Ripple } from "primeng/ripple";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-reg-sale',
  standalone: true,
  imports: [
    ButtonDirective,
    Ripple
  ],
  templateUrl: './new-reg-sale.component.html',
  styleUrl: './new-reg-sale.component.scss'
})
export class NewRegSaleComponent {
  router: any = inject(Router);

}
