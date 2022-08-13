import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CookLikeGuru'
  pageName: string = 'recipe';

  onSubmit(f: NgForm) {
  }

  onNavigate(page: string) {
    this.pageName = page;
  }
}
