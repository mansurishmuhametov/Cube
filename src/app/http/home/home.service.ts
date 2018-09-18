import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
//import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

    //constructor(private http: HttpClient) { }
    constructor() { }

    get() {
        const girls = new BehaviorSubject<any>({ title: 'Title', description: 'Description' });

        //this.getJson()
        //   .subscribe(data => {
        //        debugger;
        //    });

        return girls;
    }

    //getJson(): Observable<any> {
    //    return this.http.get('./home.json');
    //}
}
