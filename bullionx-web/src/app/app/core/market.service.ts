import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockDetails } from './auth.models';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  constructor(private http: HttpClient) {}

  getStock(symbol: string): Observable<StockDetails> {
    return this.http.get<StockDetails>(
      `${environment.apiUrl}/market/stock`,
      { params: { symbol } }
    );
  }
}