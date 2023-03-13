import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, ROOT_REDUCERS } from './store/app.state';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { PostsResolver } from './modules/posts/posts.resolver';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument({ name: "TEST" }) : [],
  ],
  providers: [PostsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
