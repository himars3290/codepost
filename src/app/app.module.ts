import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostService} from './service/post.service';
import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './component/home/home.component';

import {HttpModule} from '@angular/http';
import { DetailsComponent } from './component/details/details.component';
import { LengthPipe } from './length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DetailsComponent,
    LengthPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
