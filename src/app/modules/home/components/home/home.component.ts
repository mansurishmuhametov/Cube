import { Component, OnInit } from '@angular/core';
import { HomeService } from 'app/http/home/home.service';

import { IHome } from 'app/http/home/home';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public home: IHome;

    constructor(private _homeService: HomeService) { }

    ngOnInit() {
        this._homeService.get()
            .subscribe(home => this.home = home);
    }
}
