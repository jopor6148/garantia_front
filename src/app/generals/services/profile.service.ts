import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private url: string = '';
  constructor(
    private _http: HttpClient
  ) {
    this.url = environment.urlserver;
  }

  get(id: number): Promise<any> {
    return this._http.get(this.url + '/perfil/'+id).toPromise();
  }

  update(params: any): Promise<any>{
    return this._http.put(this.url + '/perfil/' + params.id,params).toPromise();
  }

}
