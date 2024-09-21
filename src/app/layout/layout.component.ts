import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { ButtonDirective } from "primeng/button";
import { Ripple } from "primeng/ripple";
import { StyleClassModule } from "primeng/styleclass";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonDirective,
    Ripple,
    RouterLink,
    StyleClassModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  router: any = inject(Router);

}
