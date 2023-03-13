import { Injectable, isDevMode } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

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
        },
        {
            id:"11",
            name: "Posts Loaded #11",
            description: "Description #11"
        },
        {
            id:"12",
            name: "Posts Loaded #12",
            description: "Description #12"
        }
    ]
    
    constructor() { }

    getDataApi(): Observable<any> {

        return of(this.data).pipe(
            delay(1500)
        )

    }

    deleteDataApi(id:string): Observable<any> {

        //Delete data
        return of(this.data).pipe(
            delay(1500)
        )

    }

    createDataApi(data: any): Observable<any> {

        //Delete data
        return of(this.data).pipe(
            delay(1500)
        )

    }

}