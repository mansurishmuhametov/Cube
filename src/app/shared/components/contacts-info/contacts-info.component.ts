import { Component, OnInit } from '@angular/core';
import { AutoCenterService } from '../../../http/auto-center/auto-center.service';
import { IAutoCenter } from '../../../http/auto-center/auto-center';
import { IContactsInfo } from './contacts-info';
import * as moment from 'moment';

@Component({
    selector: 'app-contacts-info',
    templateUrl: './contacts-info.component.html',
    styleUrls: ['./contacts-info.component.scss']
})
export class ContactsInfoComponent implements OnInit {

    public contacts: IContactsInfo;

    constructor(private _autoCenterService: AutoCenterService) { }

    ngOnInit() {
        this._autoCenterService.get(1)
            .subscribe(center => {
                this.contacts = this.prepare(center);
            });
    }

    prepare(center: IAutoCenter): IContactsInfo {
        const from = moment(center.from, 'HH:mm:sss[Z]');
        const to = moment(center.to, 'HH:mm:sss[Z]');

        const workTime = this.getWorkTime(from, to);

        const contacts = {
            phone: center.phone,
            location: center.location,
            workTime
        };

        return contacts;
    }

    getWorkTime(from: moment.Moment, to: moment.Moment) {
        return `Пн-Пт: ${from.format('HH:mm')} - ${to.format('HH:mm')}`;
    }
}
