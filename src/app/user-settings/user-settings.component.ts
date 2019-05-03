import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})

export class UserSettingsComponent implements OnInit {
  originalUserSettings: UserSettings;
  userSettings : UserSettings;

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('userSettings')){
      this.originalUserSettings = JSON.parse(localStorage.getItem('userSettings'));
    }
    else this.originalUserSettings = {
        name: null,
        dob: null,
        emailOffers: null,
        password: null,
        backgroundColour: null,
        subscriptionType: null,
        notes: null
      };

    this.userSettings = { ...this.originalUserSettings };

  }

  onBlur(field: NgModel){
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(form: NgForm): void{
    console.log('in onSubmit: ', form.valid);
  }
}
