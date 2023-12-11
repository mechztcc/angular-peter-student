import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationsDeliveryService {
  title: string = 'Sucess';
  description: string = 'Description!';

  type: string = 'success';
  isAlive: boolean = false;

  constructor() {}

  close() {
    this.isAlive = false;
  }

  success(description: string) {
    this.title = 'Sucesso!';
    this.description = description;
    this.type = 'success';
    this.isAlive = true;

    setTimeout(() => {
      this.isAlive = false;
    }, 3000);
  }

  error(description: string) {
    this.title = 'Falha';
    this.description = description;
    this.type = 'error';
    this.isAlive = true;

    setTimeout(() => {
      this.isAlive = false;
    }, 3000);
  }
}
