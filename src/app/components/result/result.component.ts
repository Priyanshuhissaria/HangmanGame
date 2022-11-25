//core
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//constants
import { Results } from 'src/app/constants/results.constant';
import { RouteNames } from 'src/app/constants/routes.constant';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
  
export class ResultComponent implements OnInit {
  public message1: String = '';
  public message2: String = '';
  public imgIdx: number=7;
  public result: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      let str = params['ans'];
      let temp = params['idx'];
      if (str == 'true') this.result = true;
      else this.result = false;
      if (temp) {
        this.imgIdx = temp;
      }
      console.log(this.imgIdx);
    });
    this.showMessage(this.result);
  }

  public onStartBtnClick() {
    this.router.navigateByUrl(RouteNames.GAME);
  }

  public showMessage(result: boolean): void {

    if (this.result == true) {
      console.log('hi');
      this.message1 = Results.WIN_MSG1;
      this.message2 = Results.WIN_MSG2;
    } else {
      console.log('hello');
      this.message1 = Results.LOSE_MSG1;
      this.message2 = Results.LOSE_MSG2;
    }

  }

}
