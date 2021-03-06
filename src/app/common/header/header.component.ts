import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
} from 'angularx-social-login';
import * as moment from 'moment';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';
// import { UserService } from 'src/app/services/user.service';
// import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // providers: [UserService]
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  modalRef?: BsModalRef | null;
  modalRef2?: BsModalRef | null;
  modalRef3?: BsModalRef | null;
  modalRef4?: BsModalRef | null;
  modalRef5?: BsModalRef | null;
  modalRef6?: BsModalRef | null;
  // showHide: boolean = true;
  show = true;

  signUpForm!: FormGroup;
  isSubmited: boolean = false;

  loginForm!: FormGroup;
  isLoginSubmitted: boolean = false;

  otpForm!: FormGroup;

  countryOptions: any = [
    { name: 'Australia', code: 'AU' },
    { name: 'United States', code: 'US' },
    { name: 'India', code: 'IN' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'Spain', code: 'ES' },
    { name: 'Mexico', code: 'MX' },
  ];

  GenderOptions: any = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
  ];

  courses: any = [];

  public account = {
    password: <string>(<unknown>null),
  };
  public barLabel: string = 'Password strength:';
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  public thresholds = [90, 75, 45, 25];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private modalService: BsModalService,
    private sharedService: SharedService,
    private socialAuthService: SocialAuthService,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(8)]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
          Validators.pattern(
            '(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}'
          ),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      education: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.otpForm = this.fb.group({
      firstDigit: ['', [Validators.required]],
      secDigit: ['', [Validators.required]],
      thirdDigit: ['', [Validators.required]],
      fourthDigit: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // this.getCategoryCourses();
    this.getAllCourseCategories();
    this.socialAuthService.authState.subscribe((user) => {
      if (user != null) {
        console.log(user);
      }
    });
  }

  getCategoryCourses(category_id: any) {
    let data = {
      category_id: category_id,
      language_id: '',
      duration: '',
      subject: '',
    };
    this.sharedService.getCategoryCourse(data).subscribe((res: any) => {
      if (res) {
        console.log('getCategoryCourses ==> ', res);
      } else {
        this.toastrService.error('Error');
      }
    });
  }

  getAllCourseCategories() {
    this.sharedService.getAllCourseCategories().subscribe((res: any) => {
      if (res.status == 200) {
        this.courses = res.data;
        console.log(
          'getAllCourseCategories  data from service ==> ',
          this.courses
        );
      } else {
        this.toastrService.error('Error');
      }
    });
  }

  OnDateChange(event: any) {
    this.signUpForm.get('dob')?.setValue(moment(event).format('YYYY-MM-DD'));
  }

  onOtpSubmit() {
    if (this.otpForm.invalid) {
      return;
    }

    this.closeOTPModal();
  }

  onSignUpSubmit() {
    if (this.signUpForm.invalid) {
      this.isSubmited = true;
      return;
    }

    const [firstName, lastName] = this.signUpForm.value.username
      .trim()
      .split(' ');
    this.signUpForm.value.firstname = firstName;
    this.signUpForm.value.lastname = lastName;
    this.signUpForm.value.username = this.signUpForm.value.username
      .trim()
      .split(' ')
      .join('_');
    this.signUpForm.value.username =
      this.signUpForm.value.username.toLowerCase();
    this.signUpForm.value.role = '2';
    this.signUpForm.value.status = 'active';
    this.signUpForm.value.remember_token = 'sfadsgfdgfdasg';
    // this.signUpForm.value.moodle_id = 0 ;
    // this.signUpForm.value.avatar = "fdsfdsfdsgfg" ;
    this.signUpForm.value.city = 'nagpur';
    this.signUpForm.value.institution = 'xyz';
    this.signUpForm.value.department = 'It';
    this.signUpForm.value.address = 'jvfjjfdjfjdkjkfjk';
    this.signUpForm.value.push_notification = 'active';
    this.signUpForm.value.alert = 'active';
    this.signUpForm.value.message = 'active';

    this.userService.signUp(this.signUpForm.value).subscribe((res: any) => {
      if (res.status == 200) {
        this.toastrService.success('Success', res.data);
        this.closeSignupModal();
        this.loginForm.reset();
      } else {
        this.toastrService.error('Error', res.data);
      }
    });
  }

  onLoginSubmit() {
    console.log('Submitted Values ', this.loginForm.value);
    if (this.loginForm.invalid) {
      this.isLoginSubmitted = true;
      return;
    }
  }
  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  // toggleDisplay() {
  //   this.showHide = !this.showHide;
  // }

  // userStatus(){
  //   this.showHide = this.userService.userBlock
  //   console.log(this.showHide)
  // }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      id: 1,
      class: 'modal-dialog-centered',
      ignoreBackdropClick: true,
      keyboard: false,
    });
  }

  openModal2(template: TemplateRef<any>) {
    if (this.loginForm.invalid) {
      this.isLoginSubmitted = true;
      return;
    }
    // Login api
    this.userService.login(this.loginForm.value).subscribe((res: any) => {
      console.log('login resp ', res);
    });

    this.modalRef2 = this.modalService.show(template, {
      id: 2,
      class: 'modal-dialog-centered',
    });
  }

  openModal3(template: TemplateRef<any>) {
    this.modalRef3 = this.modalService.show(template, {
      id: 3,
      class: 'modal-dialog-centered modal-lg',
    });
  }

  openModal4(template: TemplateRef<any>) {
    this.modalRef4 = this.modalService.show(template, {
      id: 4,
      class: 'modal-dialog-centered',
    });
  }

  openModal5(template: TemplateRef<any>) {
    this.modalRef5 = this.modalService.show(template, {
      id: 5,
      class: 'modal-dialog-centered',
    });
  }

  openModal6(template: TemplateRef<any>) {
    this.modalRef6 = this.modalService.show(template, {
      id: 6,
      class: 'modal-dialog-centered',
    });
  }

  closeFirstModal() {
    if (!this.modalRef) {
      return;
    }
    this.modalRef.hide();
    this.modalRef = null;
  }

  closeOTPModal() {
    if (!this.modalRef2) {
      return;
    }
    this.modalRef2.hide();
    this.modalRef2 = null;
  }

  closeSignupModal() {
    if (!this.modalRef3) {
      return;
    }
    this.modalRef3.hide();
    this.modalRef3 = null;
  }

  closeSendOTPModal() {
    if (!this.modalRef5) {
      return;
    }
    this.modalRef5.hide();
    this.modalRef5 = null;
  }

  closeModal(modalId?: number) {
    this.modalService.hide(modalId);
  }

  gotoCourseDetailPage(route: any) {
    console.log('gotoCourseDetailPage  values in in function ==>', route);
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      // .then(() => this.router.navigate([`category/${route.name}/${route.id}`]));
      .then(() => this.router.navigate([`category/${route.slug}`]));
  }
}
