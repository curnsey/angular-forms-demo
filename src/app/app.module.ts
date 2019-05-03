/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes} from '@angular/router'


/* Components */
import { AppComponent } from './app.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserListComponent } from './user-settings/user-list.component';


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
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
