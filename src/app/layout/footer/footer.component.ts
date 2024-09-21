import { Component, inject } from '@angular/core';
import { Ripple } from "primeng/ripple";
import { Router } from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    Ripple
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  router: any = inject(Router);

}
