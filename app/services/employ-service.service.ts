import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployServiceService {
  private dataUri = "http://5b137cebd50a5c0014ef129d.mockapi.io/api/v1/employees/";

  constructor(private _http: Http) {
  	
   }

  getList():Observable<any[]>{
  	return this._http.get(this.dataUri).pipe(map((response:Response) => response.json()));
  }

  getSingle(id: number):Observable<any[]>{
  	return this._http.get(this.dataUri + id).pipe(map((response:Response) => response.json()));
  }
}
