import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  catogeryId:any;
  courseDetail:any
   imageURL :any= environment.API_ENDPOINT
   courseName:string | undefined
  constructor(private route: ActivatedRoute,private sharedService: SharedService,private toastrService: ToastrService,) { }

  ngOnInit(): void {
    this.catogeryId = this.route.snapshot.params['category_id'];
    this.courseName = this.route.snapshot.params['cource']
   this.getCategoryCourses()
  }
  getCategoryCourses() {
    let data = {
      category_id: this.catogeryId,
      language_id: '',
      duration: '',
      subject: '',
      level:''
    }
    this.sharedService.getCategoryCourse(data).subscribe((res: any) => {
      if (res) {
        this.courseDetail = res.data
        console.log("getCategoryCourses ==> ", res)
      } else {
        this.toastrService.error("Error")
      }
    })
  }
//   getCourseReview (courseID:any) {
//     if(this.idCheck != courseID){
//   // this.sharedService.getCourseReviews(courseID).subscribe((res: any) => {
//   //   if(res && res.courseReviews.length > 0){
//   //     review  = res.courseReviews[0].point 
  
//   //   }
//   //   })
//   }
// }
getImage(url:any){
const image = `${this.imageURL}/public/${url}`
return image
}
}
