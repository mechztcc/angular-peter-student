import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../../auth/shared/interfaces/user.interface';
import { ITeam } from '../interfaces/team.interface';

const api = 'teams';
@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  onJoinTeam(code: string): Observable<any> {
    return this.http.post<any>(`${api}/join/${code}`, {});
  }

  onFindTeam(): Observable<{ user: IUser; teams: ITeam[] }> {
    return this.http.get<{ user: IUser; teams: ITeam[] }>(`${api}/student`);
  }
}
