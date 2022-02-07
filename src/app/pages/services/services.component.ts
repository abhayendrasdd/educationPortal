import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/services/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  serviceDetail: any;
  imageURL: any = environment.API_ENDPOINT;
  
  constructor(
    private sharedService: SharedService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this.sharedService.getServices().subscribe((res: any) => {
      if (res) {
        this.serviceDetail = res.data;
        console.log('getServices data #### ==> ', res.data);
      } else {
        this.toastrService.error('Error');
      }
    });
  }

  getImage(url: any) {
    const image = `${this.imageURL}/public/${url}`;
    return image;
  }
}
