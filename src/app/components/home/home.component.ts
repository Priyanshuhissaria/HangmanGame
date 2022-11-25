//core
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//constants
import { RouteNames } from 'src/app/constants/routes.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  public imgWidth: string ='400px';
  public imgHeight: string = '200px';
  ngOnInit(): void {}

  //redirecting to game page
  onClickStart() {
    this.router.navigateByUrl(RouteNames.GAME);
  }
}
