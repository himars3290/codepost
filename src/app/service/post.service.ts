import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

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
}