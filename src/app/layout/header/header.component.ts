import { Component, inject } from '@angular/core';
import { Ripple } from "primeng/ripple";
import { StyleClassModule } from "primeng/styleclass";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Ripple,
    StyleClassModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router: any = inject(Router);

}
