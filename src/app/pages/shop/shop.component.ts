import {Component, inject} from '@angular/core';
import {TelegramService} from '../../services/telegram.service';

@Component({
  selector: 'app-shop',
  imports: [],
  templateUrl: './shop.component.html',
  standalone: true,
  styleUrl: './shop.component.less'
})
export class ShopComponent {
  telegram = inject(TelegramService)
  constructor() {
    this.telegram.MainButton?.show()
  }
}
