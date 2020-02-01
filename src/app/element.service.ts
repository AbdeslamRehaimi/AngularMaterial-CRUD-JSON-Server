import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeriodicElement } from './periodic-element';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private Url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<PeriodicElement>(this.Url);
  }
}
