import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {Storage} from '@ionic/storage';

/* page */
import {MyApp} from './app.component';
import {HelloIonicPage} from '../pages/hello-ionic/hello-ionic';
import {ItemDetailsPage} from '../pages/item-details/item-details';
import {ListPage} from '../pages/list/list';
import {ProfilePage} from '../pages/profile/profile';
/* end page */

/* config */
import {AppConfig} from './app.config';
/* end config */

/* provider */
import {ProfileService} from './../providers/profile-service';
/* end provider */

@NgModule({
    declarations   : [
        MyApp,
        HelloIonicPage,
        ItemDetailsPage,
        ListPage,
        ProfilePage
    ],
    imports        : [IonicModule.forRoot(MyApp)],
    bootstrap      : [IonicApp],
    entryComponents: [
        MyApp,
        HelloIonicPage,
        ItemDetailsPage,
        ListPage,
        ProfilePage
    ],
    providers      : [
        AppConfig,
        Storage,
        ProfileService
    ]
})
export class AppModule {
}
