import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routerApp : Routes = [
  {
    path : 'mon-blog',component : BlogComponent
  },
  {
    path : '' , component : AcceuilComponent
  },
  {
    path : '**' , redirectTo : '' , component : AcceuilComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerApp),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
