import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  errorMessage: string = null;
  users: UserSettings[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log('in ngOnInit for user-list...');
    if(localStorage.getItem("users")){
      this.users = (JSON.parse(localStorage.getItem('users')));
      console.log(`Current Cache: ${JSON.stringify(this.users)}`);
    }
    else{
      console.log(`need to update cache...`);
      this.dataService.getUsers().subscribe(
        users => {this.users = users;},
        error => this.errorMessage = <any>error
      );
    }
  }

}
