import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private window: (Window & typeof globalThis) | null;
  tg: TelegramWebApp | null = null;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;

    if (this.window && (this.window as any).Telegram) {
      this.tg = (this.window as any).Telegram.WebApp;
    } else {
      console.warn('Telegram WebApp API не доступен.');
      this.tg = null;
    }
  }

  /** Проверка, доступен ли Telegram WebApp */
  isAvailable(): boolean {
    return !!this.tg;
  }

  get MainButton(): TGButton | undefined {
    return this.tg?.MainButton;
  }
}


interface TelegramWebApp {
  initData: string;
  initDataUnsafe: Record<string, unknown>;
  themeParams: Record<string, string>;
  isExpanded: boolean;
  expand: () => void;
  close: () => void;
  MainButton: TGButton;
}

interface TGButton {
  show(): void;

  hide(): void;

  setText(text: string): void;
}
