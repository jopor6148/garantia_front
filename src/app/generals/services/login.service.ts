import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:string = '';
  constructor(
    private _http:HttpClient
  ) {
    this.url = environment.urlserver;
  }

  login(params:any):Promise<any>{
    return this._http.post(this.url+'/login',params).toPromise();
  }

}
