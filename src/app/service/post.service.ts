import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {map} from 'rxjs/operators';
import {Post} from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  result: any;

  constructor(private _http: Http) {
  }

  getPosts() {
    return this._http.get('/api/posts')
      .pipe(
        map(result => this.result = result.json())
      );
  }

  getPost(id) {
    return this._http.get('/api/posts/' + id)
      .pipe(
        map(result => this.result = result.json())
      );
  }

  insertPost(post: Post) {
    const headers = new Headers({'Content-Type': 'Application/json'});
    const options = new RequestOptions({headers: headers});

    return this._http.post('/api/post', JSON.stringify(post), options)
      .pipe(
        map(result => this.result = result.json())
      );
  }
}
