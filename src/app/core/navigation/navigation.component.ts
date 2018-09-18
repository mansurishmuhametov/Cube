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
                name: 'Прайс лист',
                route: 'price.list'
            },
            {
                name: 'Фотографии',
                route: 'photos'
            },
            {
                name: 'Котакты',
                route: 'contacts'
            }
        ];
    }

    public setPage(event, item) {
        this.selected = item;
    }
}
