import {Injectable} from '@angular/core';

@Injectable()
export class AppConfig {

    private apiUrlDev: string = 'https://randomuser.me/api/';

    // private apiUrlProd: string = '';

    public getApiUrl() {
        return this.apiUrlDev;
    }

}
