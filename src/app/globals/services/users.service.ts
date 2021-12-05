import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = '';
  constructor(
    private _http: HttpClient
  ) {
    this.url = environment.urlserver;
  }

  getAll(): Promise<any> {
    return this._http.get(this.url + '/users').toPromise();
  }


  get(id:number): Promise<any> {
    return this._http.get(this.url + '/user/'+id).toPromise();
  }


  update(params: any): Promise<any> {
    return this._http.put(this.url + '/user/' + params.id, params).toPromise();
  }
}
