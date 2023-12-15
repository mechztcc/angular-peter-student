import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILesson } from '../interfaces/lesson.interface';

const api = 'lessons';
@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  constructor(private http: HttpClient) {}

  onFindLessons(): Observable<ILesson[]> {
    return this.http.get<ILesson[]>(`${api}/student/find-by-user`);
  }

  onFindLesson(id: number): Observable<any> {
    return this.http.get<any>(`${api}/${id}`);
  }

  onVerifyAnswer(payload: any): Observable<any> {
    return this.http.post<any>(`questions/verify-answer`, payload);
  }
}
