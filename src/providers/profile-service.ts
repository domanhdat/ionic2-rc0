import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AppConfig} from './../app/app.config';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {
    private profile: any;

    constructor(private http: Http, private appConfig: AppConfig) {
    }

    /**
     *
     * @returns {PromiseLike<{}>}
     */
    public getProfile() {
        if (this.profile) {
            return Promise.resolve(this.profile);
        }

        //noinspection TypeScriptUnresolvedFunction
        return this.http
            .get(`${this.appConfig.getApiUrl()}`)
            .toPromise()
            .then(ProfileService.mapData)
            .then(profile => this.profile = profile);
    }

    /**
     *
     * @param response
     * @returns {{}}
     */
    private static mapData(response) {
        let body = JSON.parse(response['_body'] || '');
        return body['results'] || {};
    }

}
