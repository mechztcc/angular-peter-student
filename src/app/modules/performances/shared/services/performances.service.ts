import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGeneralPerformance } from '../types/general-performance.interface';

const api = 'performances';
@Injectable({
  providedIn: 'root',
})
export class PerformancesService {
  constructor(private http: HttpClient) {}

  onGeneralPerformances(): Observable<IGeneralPerformance> {
    return this.http.get<IGeneralPerformance>(`${api}`);
  }
}
