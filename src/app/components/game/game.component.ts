//core
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//services
import { StorageService } from 'src/app/services/storage.service';

//constants
import { Btn, Buttons } from 'src/app/constants/buttons.constant';
import { RouteNames } from 'src/app/constants/routes.constant';
import { Word } from 'src/app/constants/words-list.constant';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  public hint: String = '';
  public word: String = '';
  public outputs: String[] = [];
  public buttons: Btn[] = Buttons.buttons;
  public livesCount: number = 1;
  public map = new Map();
  private correct: number = 0;
  private length: number = 0;

  constructor(private storageService: StorageService, private route: Router) {}

  public ngOnInit(): void {
    let word: Word = this.storageService.getRandomWord();
    this.hint = word.type;
    this.word = word.name;
    this.length = this.word.length;
    for (let i = 0; i < this.length; i++) {
      this.outputs.push('');
    }
    for (let i = 0; i < 26; i++) {
      this.map.set(this.buttons[i], false);
    }
  }

  public keyPress(key: KeyboardEvent) {
    let s: string = key.key;
    console.log(key);
    if (key.keyCode > 64 && key.keyCode <= 90 && !this.map.get(key)) {
      this.updateOutput(s);
    }
  }

  public onKeyboardClick(btn: String) {
    this.updateOutput(btn);
  }

  private updateOutput(btn: String | any) {
    let touched: boolean = false;
    for (let i = 0; i < this.length; i++) {
      if (this.word.at(i) == btn) {
        this.outputs[i] = btn;
        this.correct++;
        touched = true;
      }
    }

    if (this.correct == this.length) {
      const url:string = RouteNames.RESULT + '?ans=true&idx=' + this.livesCount
      this.route.navigateByUrl(
        url
      );
      Buttons.reset();
      return;
    }

    if (!touched) {
      this.livesCount++;
      if (this.livesCount == 7) {
        this.route.navigateByUrl(RouteNames.RESULT + '?ans=false&idx=7');
        Buttons.reset();
        return;
      }
    }

    for (let i = 0; i < 26; i++) {
      if (this.buttons[i].val == btn) {
        this.map.set(btn, true);
        this.buttons[i].touched = true;
        break;
      }
    }
  }

}
