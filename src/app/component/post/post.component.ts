import {Component, OnInit} from '@angular/core';
import {Post} from '../../model/post';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../service/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Array<Post>;
  postForm: FormGroup;

  constructor(private _postService: PostService, fb: FormBuilder, private router: Router) {
    this.postForm = fb.group({
      'title': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(100)])],
      'url': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    });
  }

  ngOnInit() {
    this._postService.getPosts()
      .subscribe(res => this.posts = res);
  }

  addPost(post: Post) {
    console.log('test');
    this._postService.insertPost(post)
      .subscribe(newPost => {
        this.posts.push(newPost);
        this.router.navigateByUrl('/');
      });
  }

}
