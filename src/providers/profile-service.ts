import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AppConfig} from './../app/app.config';
import {Storage} from '@ionic/storage';

@Injectable()
export class ProfileService {
    private profile: any;

    constructor(private http: Http, private appConfig: AppConfig, private storage: Storage) {
    }

    /**
     *
     * @returns {PromiseLike<{}>}
     */
    public getProfile() {
        if (this.profile) {
            return Promise.resolve(this.profile);
        }

        return new Promise((resolve, reject) =>
            this.http.get(this.appConfig.getApiUrl())
                .subscribe(
                    data => {
                        this.profile = ProfileService.mapData(data);
                        return resolve(this.profile);
                    },
                    error => reject(error)
                )
        );
    }

    /**
     *
     * @param res
     * @returns {{}}
     */
    private static mapData(res) {
        let body = JSON.parse(res['_body'] || '');
        return body['results'] || {};
    }

}
