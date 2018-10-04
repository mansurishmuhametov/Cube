import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IAutoCenter } from './auto-center';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class AutoCenterService {

    private _url: string = 'assets/data/auto-center/auto-center.json';

    constructor(private http: HttpClient) {}

    getAll(): Observable<IAutoCenter[]> {
        return this.http.get<IAutoCenter[]>(this._url);
    }

    get(id): Observable<IAutoCenter> {
        return this.getAll().map(items => {
            return _.find(items, { id: id }) || {};
        });
    }
}
