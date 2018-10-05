import { NgModule } from '@angular/core';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
    imports: [ContactsRoutingModule],
    declarations: [ContactsComponent],
    exports: []
})
export class ContactsModule { }
