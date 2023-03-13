import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { search } from 'src/app/store/actions/posts.actions';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss']
})
export class PostSearchComponent {
  
  @Output() filterSring = new EventEmitter<string>();

  data = [
    {
        id:"1",
        name: "Posts Loaded #1",
        description: "Description #1",
    },
    {
        id:"2",
        name: "Posts Loaded #2",
        description: "Description #2"
    },
    {
        id:"3",
        name: "Posts Loaded #3",
        description: "Description #3"
    },
    {
        id:"4",
        name: "Posts Loaded #4",
        description: "Description #4"
    },
    {
        id:"5",
        name: "Posts Loaded #5",
        description: "Description #5"
    },
    {
        id:"6",
        name: "Posts Loaded #6",
        description: "Description #6"
    },
    {
        id:"7",
        name: "Posts Loaded #7",
        description: "Description #7"
    },
    {
        id:"8",
        name: "Posts Loaded #8",
        description: "Description #8"
    },
    {
        id:"9",
        name: "Posts Loaded #9",
        description: "Description #9"
    },
    {
        id:"10",
        name: "Posts Loaded #10",
        description: "Description #10"
    }
  ]

  constructor(private store: Store<AppState>) { }

  onSubmit(submittedForm: any){
    
    this.store.dispatch(search({ search: submittedForm.value.name } ));   

  }

}
