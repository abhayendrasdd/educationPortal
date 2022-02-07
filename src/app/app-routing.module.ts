import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { EnrolledCoursesComponent } from './login/enrolled-courses/enrolled-courses.component';
import { GroupsComponent } from './login/groups/groups.component';
import { MyAccountComponent } from './login/my-account/my-account.component';
import { NotificationsComponent } from './login/notifications/notifications.component';
import { SettingsComponent } from './login/settings/settings.component';
import { TransactionLogsComponent } from './login/transaction-logs/transaction-logs.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CheckoutCartComponent } from './pages/checkout-cart/checkout-cart.component';
import { CheckoutPaymentComponent } from './pages/checkout-payment/checkout-payment.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { EmploymentProgramComponent } from './pages/employment-program/employment-program.component';
import { FaqComponent } from './pages/faq/faq.component';
import { GroupDetailsComponent } from './pages/group-details/group-details.component';
import { HomeComponent } from './pages/home/home.component';
import { InterviewSkillsComponent } from './pages/interview-skills/interview-skills.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { ServicesComponent } from './pages/services/services.component';
import { TutorsSectionComponent } from './pages/tutors-section/tutors-section.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  // {path:"category/:cource/:category_id", component:SearchResultsComponent, runGuardsAndResolvers: 'always',},
  {
    path: 'category/:slug',
    component: SearchResultsComponent,
    runGuardsAndResolvers: 'always',
  },
  { path: 'course-details', component: CourseDetailsComponent },
  { path: 'course-details/:slug', component: CourseDetailsComponent },
  { path: 'cart', component: CheckoutCartComponent },
  { path: 'payment', component: CheckoutPaymentComponent },
  { path: 'frequently-asked-questions', component: FaqComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'interview-skills', component: InterviewSkillsComponent },
  { path: 'employment-program', component: EmploymentProgramComponent },
  { path: 'tutors', component: TutorsSectionComponent },
  { path: 'group-details', component: GroupDetailsComponent },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'enrolled-courses', component: EnrolledCoursesComponent },
  { path: 'transaction-logs', component: TransactionLogsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
