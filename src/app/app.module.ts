/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes} from '@angular/router'
import { ButtonsModule } from 'ngx-bootstrap/buttons'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

/* Components */
import { AppComponent } from './app.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserListComponent } from './user-settings/user-list.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { StarComponent } from './shared/star-rating/star.component'


/* Pipes */


/* Guards */


/* Constants */
const routes = [
  { path: 'users', component: UserListComponent},
  { path: 'users/:id', component: UserSettingsComponent},
  { path: '**', redirectTo: 'users'},
];

@NgModule({
  declarations: [
    AppComponent,
    UserSettingsComponent,
    UserListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    RatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
