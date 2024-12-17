import { Component, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatCardModule],
  templateUrl: './cart.component.html'
})
export class CartComponent {
  
  items: CartItem[] = [];

  total = 0;
    
  constructor(private sharingDataService: SharingDataService, private router: Router) {
    this.items = this.router.getCurrentNavigation()?.extras.state!['items'];
    this.total = this.router.getCurrentNavigation()?.extras.state!['total'];
  }

  onDeleteCart(id: number) {
    this.sharingDataService.idProductEventEmitter.emit(id);
  }


 
}
