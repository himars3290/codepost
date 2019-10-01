import {Component, OnInit} from '@angular/core';
import {Post} from '../../model/post';
import {PostService} from '../../service/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  post: Array<Post>;

  constructor(private _postService: PostService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._postService.getPost(id)
        .subscribe(res => this.post = res);
    });
  }
}
