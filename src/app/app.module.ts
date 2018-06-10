import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'angular4-carousel';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './home/slider/slider.component';
import { HomeComponent } from './home/home.component';
import { PoojasComponent } from './home/poojas/poojas.component';
import { PoojasdescriptionComponent } from './home/poojas/poojasdescription/poojasdescription.component';
import { PoojasiteamsComponent } from './home/poojas/poojasiteams/poojasiteams.component';
import { PoojasiteamComponent } from './home/poojas/poojasiteams/poojasiteam/poojasiteam.component';
import { PunyakeshtramsComponent } from './home/punyakeshtrams/punyakeshtrams.component';
import { PunyakeshtramdescriptionComponent } from './home/punyakeshtrams/punyakeshtramdescription/punyakeshtramdescription.component';
import { PunyakeshtramiteamsComponent } from './home/punyakeshtrams/punyakeshtramiteams/punyakeshtramiteams.component';
import { PunyakeshtramiteamComponent } from './home/punyakeshtrams/punyakeshtramiteams/punyakeshtramiteam/punyakeshtramiteam.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactOptionsComponent } from './contact-us/contact-options/contact-options.component';
import { LocationComponent } from './contact-us/location/location.component';
import { GetInTouchComponent } from './contact-us/get-in-touch/get-in-touch.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './profile/update-profile/update-profile.component';
import { MyOrdersComponent } from './profile/my-orders/my-orders.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { RegisterPurohitComponent } from './register-purohit/register-purohit.component';
import { Footer2Component } from './footer2/footer2.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PoojadetailsComponent } from './poojadetails/poojadetails.component';
import { PunyakshetramdetailsComponent } from './punyakshetramdetails/punyakshetramdetails.component';
import { BookNowComponent } from './book-now/book-now.component';
import { SmallDescPipe } from './small-desc.pipe';
import { PoojasCategoriesComponent } from './poojas-categories/poojas-categories.component';
import { PoojaCategoryItemComponent } from './poojas-categories/pooja-category-item/pooja-category-item.component';
import { PunyakshetramsCategoriesComponent } from './punyakshetrams-categories/punyakshetrams-categories.component';
import { PunyakshetramCategoryItemComponent } from './punyakshetrams-categories/punyakshetram-category-item/punyakshetram-category-item.component';
import { BookingConfirmComponent } from './booking-confirm/booking-confirm.component';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'poojasCategories/:categoryId', component: PoojasCategoriesComponent },
  { path: 'punyakshetramsCategories/:categoryId', component: PunyakshetramsCategoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'purohith', component: RegisterPurohitComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'updateProfile', component: UpdateProfileComponent },
  { path: 'myOrders', component: MyOrdersComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: "poojadetails/:poojaId", component: PoojadetailsComponent },
  { path: "punyakeshtramdetails/:punyakshetramId", component: PunyakshetramdetailsComponent },
  { path: "bookNow/:poojaId", component: BookNowComponent },
  { path: "bookingConfirm/:bookingId", component: BookingConfirmComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PoojasComponent,
    PoojasdescriptionComponent,
    PoojasiteamsComponent,
    PoojasiteamComponent,
    PunyakeshtramsComponent,
    PunyakeshtramdescriptionComponent,
    PunyakeshtramiteamComponent,
    PunyakeshtramiteamsComponent,
    ContactUsComponent,
    ContactOptionsComponent,
    LocationComponent,
    GetInTouchComponent,
    HeaderTopComponent,
    ProfileComponent,
    UpdateProfileComponent,
    MyOrdersComponent,
    ChangePasswordComponent,
    RegisterPurohitComponent,
    Footer2Component,
    ForgotPasswordComponent,
    PoojadetailsComponent,
    PunyakshetramdetailsComponent,
    BookNowComponent,
    SmallDescPipe,
    PoojasCategoriesComponent,
    PoojaCategoryItemComponent,
    PunyakshetramsCategoriesComponent,
    PunyakshetramCategoryItemComponent,
    BookingConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
