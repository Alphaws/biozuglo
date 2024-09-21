import { Component, inject, OnInit } from '@angular/core';
import { Ripple } from "primeng/ripple";
import { StyleClassModule } from "primeng/styleclass";
import { Router, RouterLink } from "@angular/router";
import { ButtonDirective } from "primeng/button";
import { ConfigService } from "../../services/config.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Ripple,
    StyleClassModule,
    RouterLink,
    ButtonDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  router: any = inject(Router);
  configService = inject(ConfigService);

  config: any = [];

  constructor() {}

  ngOnInit() {
    this.config = this.configService.getConfig();
  }

}
