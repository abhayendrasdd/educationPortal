import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
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
  
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    
  }

  // toggleDisplay() {
  //   this.showHide = !this.showHide;
  // }

 

  // userStatus(){ 
  //   this.showHide = this.userService.userBlock
  //   console.log(this.showHide)      
  // }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      { id: 1, class: 'modal-dialog-centered',
      ignoreBackdropClick: true, 
      keyboard: false
    });
  }

  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, {id: 2, class: 'modal-dialog-centered'});
  }

  openModal3(template: TemplateRef<any>) {
    this.modalRef3 = this.modalService.show(template, {id: 3, class: 'modal-dialog-centered modal-lg'});
  }

  openModal4(template: TemplateRef<any>) {
    this.modalRef4 = this.modalService.show(template, {id: 4, class: 'modal-dialog-centered'});
  }

  openModal5(template: TemplateRef<any>) {
    this.modalRef5 = this.modalService.show(template, {id: 5, class: 'modal-dialog-centered'});
  }

  openModal6(template: TemplateRef<any>) {
    this.modalRef6 = this.modalService.show(template, {id: 6, class: 'modal-dialog-centered'});
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

  closeSendOTPModal(){
    if (!this.modalRef5){
      return;
    }
      this.modalRef5.hide();
      this.modalRef5 = null;
    
  }

  closeModal(modalId?: number){
    this.modalService.hide(modalId);
  }

}
