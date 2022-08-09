import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() userDetails: any;

  constructor() { }

  ngOnInit(): void {
  }


  ngOnAfterInit() {
  }

}
