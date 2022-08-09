import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {


  @Input() userRepo: any;







  @Input() page: any;

  itemsPerPage = 9;
  totalItems: any;

  constructor() { }

  ngOnInit(): void {
  }

}
