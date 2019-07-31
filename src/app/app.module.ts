import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { JoinComponent } from './join/join.component';
import { ContactComponent } from './contact/contact.component';

import { NavbarComponent } from './navbar/navbar.component';

import {RouterModule , Routes} from '@angular/router';
import { FooterComponent } from './footer/footer.component';


const appRoutes:Routes = 
[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home' , component:HomeComponent},
  {path:'team' , component:TeamComponent},
  {path:'expertise' , component:ExpertiseComponent},
  {path:'join' , component:JoinComponent},
  {path:'contact' , component:ContactComponent},
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    
    TeamComponent,
    
    ExpertiseComponent,
    
    JoinComponent,
    
    ContactComponent,
    
    NavbarComponent,
    
    FooterComponent
  ],
  imports: [
    BrowserModule,FormsModule,CustomFormsModule,RouterModule.forRoot(appRoutes,{useHash:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
