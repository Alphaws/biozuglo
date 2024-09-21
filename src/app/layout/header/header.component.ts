import { Component, inject, OnInit } from '@angular/core';
import { Ripple } from "primeng/ripple";
import { StyleClassModule } from "primeng/styleclass";
import { Router, RouterLink } from "@angular/router";
import { Button, ButtonDirective } from "primeng/button";
import { ConfigService } from "../../services/config.service";
import { BadgeModule } from "primeng/badge";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Ripple,
    StyleClassModule,
    RouterLink,
    ButtonDirective,
    BadgeModule,
    Button
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  router: any = inject(Router);
  configService = inject(ConfigService);

  config: any = [];
  cartSize: number = 0;

  constructor() {}

  ngOnInit() {
    this.config = this.configService.getConfig();
  }

}
