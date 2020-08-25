import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from '../../resources/urls';

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  constructor(private http : HttpClient) { }

  follow(id){

    const url = urls.base_url + urls.connections.follow.replace('{user-id}', ''+id);

    return this.http.post(url, {});

  }

  unfollow(id){

    const url = urls.base_url + urls.connections.unfollow.replace('{user-id}', ''+id);

    return this.http.delete(url);

  }

  getFollowers(id){

    const url = urls.base_url + urls.connections.followers.replace('{user-id}', ''+id);

    return this.http.get(url);
  }

  getFollowing(id){

    const url = urls.base_url + urls.connections.following.replace('{user-id}', ''+id);

    return this.http.get(url);
  }
}
