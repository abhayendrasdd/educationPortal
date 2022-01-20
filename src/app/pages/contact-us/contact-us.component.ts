import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  isSubmited!: boolean;
  contactUsForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private toastr : ToastrService

  ) {
    this.contactUsForm = this.fb.group({
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log("Contact us value ==> ", this.contactUsForm.value)
    if (this.contactUsForm.invalid) {
      this.isSubmited = true;
      return
    }
    this.sharedService.addContacts(this.contactUsForm.value).subscribe((res:any)=>{
      console.log("addContacts response",res);
      if(res.status == 200) {
        this.toastr.success("Success");
      } else {
        this.toastr.error("Error");
      }
    })
  }

}
