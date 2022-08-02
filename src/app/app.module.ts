import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';;
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ListUsersComponent } from './users/list-users/list-users.component';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    UsersModule,
    HttpClientModule,
    MatListModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    NgbModule,
    // ListUsersComponent

 
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
