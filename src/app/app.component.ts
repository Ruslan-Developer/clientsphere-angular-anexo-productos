import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartAppComponent } from './components/cart-app.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartAppComponent,
    MatCardModule,
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ClientSphere Catalog';
}
