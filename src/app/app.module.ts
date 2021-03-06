import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CheckoutCartComponent } from './pages/checkout-cart/checkout-cart.component';
import { CheckoutPaymentComponent } from './pages/checkout-payment/checkout-payment.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { CareersComponent } from './pages/careers/careers.component';
import { InterviewSkillsComponent } from './pages/interview-skills/interview-skills.component';
import { EmploymentProgramComponent } from './pages/employment-program/employment-program.component';
import { TutorsSectionComponent } from './pages/tutors-section/tutors-section.component';
import { GroupDetailsComponent } from './pages/group-details/group-details.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { GroupsComponent } from './login/groups/groups.component';
import { MyAccountComponent } from './login/my-account/my-account.component';
import { EnrolledCoursesComponent } from './login/enrolled-courses/enrolled-courses.component';
import { TransactionLogsComponent } from './login/transaction-logs/transaction-logs.component';
import { NotificationsComponent } from './login/notifications/notifications.component';
import { SettingsComponent } from './login/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Ng9PasswordStrengthBarModule } from 'ng9-password-strength-bar';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { AppleSigninModule } from 'ngx-apple-signin';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    SearchResultsComponent,
    CourseDetailsComponent,
    CheckoutCartComponent,
    CheckoutPaymentComponent,
    FaqComponent,
    ContactUsComponent,
    AboutUsComponent,
    ResourcesComponent,
    CareersComponent,
    InterviewSkillsComponent,
    EmploymentProgramComponent,
    TutorsSectionComponent,
    GroupDetailsComponent,
    DashboardComponent,
    GroupsComponent,
    MyAccountComponent,
    EnrolledCoursesComponent,
    TransactionLogsComponent,
    NotificationsComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    Ng9PasswordStrengthBarModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot({
      validation: true,
    }),
    CollapseModule.forRoot(), TabsModule.forRoot(), AccordionModule.forRoot(), ModalModule.forRoot(),
    SocialLoginModule,AppleSigninModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '619926919579-2lt0f2b2jqke7hqs0jm77gb4qukq1nqo.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider( '282577308941815')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
