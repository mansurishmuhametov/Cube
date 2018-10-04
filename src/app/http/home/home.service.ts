import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHome } from './home';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {

    private _url: string = 'assets/data/home/home.json';

    constructor(private http: HttpClient) {}

    get(): Observable<IHome> {
        return this.http.get<IHome>(this._url);
    }
}
