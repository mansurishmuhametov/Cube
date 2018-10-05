import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [{
    path: 'contacts',
    redirectTo: '/contacts.list'
}, {
    path: 'contacts.list',
    component: ContactsComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ContactsRoutingModule { }
