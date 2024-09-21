import { Component } from '@angular/core';
import { PasswordModule } from "primeng/password";
import { FormsModule } from "@angular/forms";
import { CheckboxModule } from "primeng/checkbox";
import { RouterLink } from "@angular/router";
import { ButtonDirective } from "primeng/button";
import { Ripple } from "primeng/ripple";
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    PasswordModule,
    FormsModule,
    CheckboxModule,
    RouterLink,
    ButtonDirective,
    Ripple,
    InputTextModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  password!: any;

}
