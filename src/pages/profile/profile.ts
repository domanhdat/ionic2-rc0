import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProfileService} from './../../providers/profile-service';

@Component({
    templateUrl: './profile.html'
})
export class ProfilePage extends OnInit {

    public data: any;
    public error: any;

    constructor(public navCtrl: NavController, protected profileService: ProfileService) {
        super();
    }

    ngOnInit() {
        this.getProfile();
    }

    /**
     *
     * @returns {Promise<{}>}
     */
    protected getProfile() {
        return this.profileService.getProfile()
            .then(data => this.data = data)
            .catch(error => this.error = error);
    }

}
