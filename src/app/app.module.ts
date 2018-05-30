import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { HeaderComponent } from './shared/header/header.component';


import { BreadcrumpsComponent } from './shared/breadcrumps/breadcrumps.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Rutas
import { AppRoutes } from './app.routes';
import { PagesModule } from './pages/pages.module';
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,


 
  ],
  imports: [
    BrowserModule, FormsModule,BrowserAnimationsModule, AppRoutes,PagesModule,FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
