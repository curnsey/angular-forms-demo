import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})

export class UserSettingsComponent implements OnInit {
  originalUserSettings: UserSettings;
  userSettings : UserSettings;
  subscriptionTypes: Observable<any[]>;
  postError: boolean = false;
  postErrorMessage: string = '';
  postSubmit: boolean = false;
  postSubmitMessage: string = '';

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private dataService: DataService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id'); //the plus converts from string to numeric Id
    //let id = Math.floor((Math.random() * 250));
    console.log(id);
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    if(localStorage.getItem('users')){
      console.log("Getting users from local storage.");
      this.originalUserSettings = (<UserSettings[]>JSON.parse(localStorage.getItem('users'))).find(x=>x.id == id);
      this.userSettings = { ...this.originalUserSettings };
    }
    else {
      console.log("Getting users from external source.");
      this.dataService.getUser(0).subscribe(
        result => {
          console.log(result);
          this.originalUserSettings = result
          this.userSettings = { ...this.originalUserSettings };
        },
        error => console.log(error)
      );
    }


  }

  onBlur(field: NgModel){
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(form: NgForm): void{
    console.log('in onSubmit: ', form.valid);
    this.postError = false;
    this.postSubmit = false;
    if(form.valid){
      this.dataService.postUserSettings(this.userSettings).subscribe(
        result => {
          console.log(`success: ${result.submitMessage}${JSON.stringify(result)}`);
          this.postSubmit = true;
          this.postSubmitMessage = result.submitMessage;
        },
        error => this.onHttpError(error)
      );
    }
    else{
      this.postError = true;
      this.postErrorMessage = 'Please fix form errors before submitting.';
    }
  }

  onHttpError(errorRespnse: any){
    console.log('error: ', errorRespnse);
    this.postError = true;
    this.postErrorMessage = errorRespnse.error.errorMessage;
  }
}
