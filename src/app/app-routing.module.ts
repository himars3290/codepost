import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {DetailsComponent} from './component/details/details.component';
import {PostComponent} from './component/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
