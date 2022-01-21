import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  oneAtATime = true;
  faqs: any = []
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getFaqs();
  }

  getFaqs() {
    this.sharedService.getFAQs({ course_id: 0 }).subscribe((res: any) => {
      if (res && res.data && res.data.faqs) {
        this.faqs = res.data.faqs;
        console.log("getFAQs ", this.faqs);

      } else {
        // error msg
      }

    })
  }

  transformHTML(value: any): string {
    const temp = document.createElement('div');
    temp.innerHTML = value;
    return temp.textContent || temp.innerText || '';
  }

  

}
