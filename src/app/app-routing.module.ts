import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsResolver } from './modules/posts/posts.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { posts: PostsResolver },
    loadChildren: () => import('./modules/posts/posts.module').then((m) => m.PostsModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
