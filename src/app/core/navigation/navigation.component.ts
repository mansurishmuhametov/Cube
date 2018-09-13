import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    pages: {}[];
    selected: {};

    constructor() { }

    ngOnInit() {
        this.pages = [
            {
                value: 'priceList',
                name: 'Прайс лист',
                route: 'price.list'
            },
            {
                value: 'photos',
                name: 'Фотографии',
                route: 'photos'
            },
            {
                value: 'contacts',
                name: 'Котакты',
                route: 'contacts'
            }
        ];

        this.selected = this.pages[0];
    }

    public setPage(event, item) {
        this.selected = item;
    }
}
