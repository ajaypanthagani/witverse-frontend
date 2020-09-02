import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from '../../resources/urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient
  ) { }

  getAll(){

    const url = urls.base_url + urls.users;

    return this.http.get(url);

  }

  getOne(id){

    const url = urls.base_url + urls.user.replace('{user-id}', id);

    return this.http.get(url);

  }

  getRandom(n){

    const url = urls.base_url + urls.users + '/random/{n}'.replace('{n}', n);

    return this.http.get(url);
  }

  put(id, data){

    const url = urls.base_url + urls.user.replace('{user-id}', id);

    return this.http.put(url, data);
  }

  changeDP(data){

    const url = urls.base_url + urls.upload.displayImage;

    return this.http.post(url, data, {
      reportProgress : true,
      observe : 'events'
    });
  }

  deleteOne(id){

    const url = urls.base_url + urls.user.replace('{user-id}', id);

    return this.http.delete(url);
  }
}
