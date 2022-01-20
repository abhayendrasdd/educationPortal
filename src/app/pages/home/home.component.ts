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
   }

  ngOnInit(): void {
  }

  onContactSubmit() {
    console.log("Submitted Values ", this.mailForm.value)
    if (this.mailForm.invalid) {
      this.isSubmited = true;
      return
    }
    this.sharedService.addContacts(this.mailForm.value).subscribe((res:any)=>{
      console.log("addContacts response",res);
      if(res.status == 200) {
        this.toastr.success("Success");
      } else {
        this.toastr.error("Error");
      }
    })

  }

}
