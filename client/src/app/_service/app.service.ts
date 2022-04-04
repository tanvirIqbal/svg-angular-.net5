import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Dimension } from '../_models/dimentsion';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl = environment.apiUrl + 'SVGDimention/';;

  constructor(private http: HttpClient) { }

  saveDimension(dimension: Dimension) {
    const body = {
      width: dimension.width,
      height: dimension.height
    }
    return this.http.post(this.baseUrl + "SaveDimension", body,{responseType: 'text'});
  }
  getDimension() {
    return this.http.get<Dimension>(this.baseUrl + "GetDimension");
  }
}
