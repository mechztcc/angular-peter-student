import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const api = 'teams';
@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  onJoinTeam(code: string): Observable<any> {
    return this.http.post<any>(`${api}/join/${code}`, {});
  }
}
