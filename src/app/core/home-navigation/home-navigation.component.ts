import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-navigation',
    templateUrl: './home-navigation.component.html',
    styleUrls: ['./home-navigation.component.scss']
})
export class HomeNavigationComponent implements OnInit {
    page: {};

    constructor() { }

    ngOnInit() {
        this.page = {
            name: 'Home',
            route: 'home'
        };
    }

}
