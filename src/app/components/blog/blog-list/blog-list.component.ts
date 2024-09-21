import { Component } from '@angular/core';
import { ButtonDirective } from "primeng/button";
import { Ripple } from "primeng/ripple";

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    ButtonDirective,
    Ripple
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {

}
