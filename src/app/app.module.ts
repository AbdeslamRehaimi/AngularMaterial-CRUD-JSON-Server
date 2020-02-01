import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './users/user-list/user-list.component';
import { ElementService } from './element.service';
import { RouterModule} from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { MatDialogModule } from '@angular/material';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';

//import {MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule} from '@angular/material';
/*import {MatIconModule} from '@angular/material';*/




export const routesConfig: Routes = [
  {
    path: 'add',
    component: UserComponent
  },
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    RouterModule.forRoot(
      routesConfig
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ElementService],
  bootstrap: [AppComponent]
})

export class AppModule { }
