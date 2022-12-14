import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }

  getGAME(){
    return this.http.get("http://localhost:3000/games").pipe(map((res:any)=>{
      return res;
    }))
  }
}
