import { Component, OnInit, Input } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {


  @Input() userRepo: any;
  @Input() page: any;

  itemsPerPage = 9;
  totalItems: any;

  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
  }

  ngAfterOnInint() { }
}
