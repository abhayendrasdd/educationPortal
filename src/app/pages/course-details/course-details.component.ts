import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  oneAtATime = true;
  courseSlug: any;
  courseDetails: any;
  faqs: any = [];
  courseRating: any = 0;

  stars: number[] = [1, 2, 3, 4, 5];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: SharedService,
    private toastr: ToastrService
  ) {


    this.courseSlug = this.route.snapshot.params['slug'];
    if (this.courseSlug) {
      this.getCourseDetails()
    } else {
      this.router.navigateByUrl('/');
    }
  }

  ngOnInit(): void {
  }

  getCourseDetails() {
    this.courseService.getCourseDetailsBySlug(this.courseSlug).subscribe((res: any) => {
      if (res.status == 200) {
        this.courseDetails = res.data;
        this.courseRating = Number(this.courseDetails.reviews_avg);
        console.log("this.courseDetails => ", this.courseDetails);
        // Get Faqs 
        if (this.courseDetails && this.courseDetails.id) {
          this.getCourseFaqs(this.courseDetails.id)
        }
      } else {
        this.toastr.error("No course Details Found")
        this.router.navigateByUrl('/');
      }
    })

  }

  getCourseFaqs(courseId: any) {
    this.courseService.getCourseFaqs(courseId).subscribe((res: any) => {
      if (res.status == 200 && res.data && res.data.faqs && res.data.faqs.length) {
        this.faqs = res.data.faqs;
        console.log("this.faqs ==> ", this.faqs)
      }
    })

  }

}
