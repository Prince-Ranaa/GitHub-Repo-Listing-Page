import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from './Services/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github';

  username!: string;
  gitUserDetails: any;
  gitUserRepo!: any;

  page: number = 1;
  totalItems: any;



  constructor(private apiService: ApiServiceService, private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
  }


  getUserDetails() {
    this.spinner.show();
    this.apiService.getUserDetail(this.username).subscribe({
      next: (res) => {
        this.gitUserDetails = res
      },
      error: (err) => {
        if (err.status === 404) {
          alert('Cannot Find Page..')
        }
        else {
          alert("No Internet Connection")
        }

      }
    })
    this.getUserRepo()
  }



  getUserRepo() {
    this.apiService.getUserRepo(this.username).subscribe({
      next: (res) => {
        this.gitUserRepo = res
      },
      error: (err) => {
        if (err.status === 404) {
          alert('Cannot Find Page..')
        }
        else {
          alert("No Internet Connection")
        }
      },
      complete: () => {
        this.spinner.hide();
      }
    })
  }
}
