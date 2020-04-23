import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  pid: string;
  constructor(public router: ActivatedRoute) { }

  ngOnInit(): void {
   this.router.params.subscribe(data => {
     this.pid = data.id;
   });
  }


}
