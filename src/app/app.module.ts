import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-list/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarComponent } from './components/star/star.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutes } from './routes/admin.routing';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { Product } from './common/product';
import { ProductAddComponent } from './components/product-add/product-add.component';

const routes: Routes =[
 { path: 'productlist', component: ProductListComponent },
  { path: 'productdetail/:id', component: ProductDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'productlist' },
  { path: 'login', component: LoginComponent },
  { path: 'productadd', component: ProductAddComponent },
  { path: '**', component: NotFoundComponent },


]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    LoginComponent,
    ProductAddComponent,
    StarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutes,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
