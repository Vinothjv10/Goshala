import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.css']
})
export class CentersComponent implements OnInit {

  show_1: any;
  show_2: any;
  show_3: any;
  show_4: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  center1() {
    this.router.navigateByUrl('center1');
  }

}
