import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

const api = 'auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  onLogin(payload: {
    email: string;
    password: string;
  }): Observable<{ user: IUser }> {
    return this.http.post<{ user: IUser }>(`${api}`, payload);
  }
}
