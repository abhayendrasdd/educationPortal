import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
  customOptions1: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  mailForm!: FormGroup;
  isSubmited: boolean = false;

  settingsRecords : any;
  sagsonContact: any;
  sagsonEmail: any;
  new_york_address_line_1: any;
  new_york_address_line_2: any;
  san_francisco_line_1: any;
  san_francisco_line_2: any;
  dubai_line_1: any;
  dubai_line_2: any;

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private toastr : ToastrService
  ) {
    this.mailForm = this.fb.group({
      full_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      phone: ['1234567890']
    });

    this.getSettings();
    this.getSagsonContact();
    this.getSagsonEmail();
   }

  ngOnInit(): void {
  }

  onContactSubmit() {
    if (this.mailForm.invalid) {
      this.isSubmited = true;
      return
    }
    this.sharedService.addContacts(this.mailForm.value).subscribe((res:any)=>{
      if(res.status == 200) {
        this.toastr.success(res.data);
        this.mailForm.reset();
      } else {
        this.toastr.error("Error");
      }
    })

  }

  getSettings(){
    this.sharedService.getSetting().subscribe((res:any)=>{
      if(res.status == 200) {
        this.settingsRecords = res.data;
        console.log("getSetting response",res.data);
        this.settingsRecords.filter((ele:any)=>{
          if(ele.s_key == 'new_york_address_line_1'){
            this.new_york_address_line_1 = ele.value;
          } else if(ele.s_key == 'New_york_address_line_2'){
            this.new_york_address_line_2 = ele.value;
          }else if(ele.s_key == 'san_francisco_line_1'){
            this.san_francisco_line_1 = ele.value;
          }else if(ele.s_key == 'San_francisco_line_2'){
            this.san_francisco_line_2 = ele.value;
          }else if(ele.s_key == 'dubai_line_1'){
            this.dubai_line_1 = ele.value;
          }else if(ele.s_key == 'Dubai_line_2'){
            this.dubai_line_2 = ele.value;
          }
        })
      } else {
        this.toastr.error("Error");
      }
    })
  }

   getSagsonContact(){
    this.sharedService.getSettingValues({ s_key : 'sagson_contact'}).subscribe((res:any)=>{
      // if(res.status == 200) {
      //   this.sagsonContact = res.data[0].value;
      // } else {
      //   this.toastr.error("Error");
      // }
    })
  }

  getSagsonEmail(){
    this.sharedService.getSettingValues({ s_key : 'sagson_contact_email'}).subscribe((res:any)=>{
      if(res.status == 200) {
        this.sagsonEmail = res.data[0].value;
      } else {
        this.toastr.error("Error");
      }
    })
  }

}
