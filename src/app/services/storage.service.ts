import { Injectable } from '@angular/core';
import { Word, WordList } from '../constants/words-list.constant';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public getRandomWord(): Word {
    let size = WordList.num;
    let type = Math.floor(Math.random() * size);
    let length = WordList.wordList[type].num;
    let idx = Math.floor(Math.random() * length);
    return {
      type: WordList.wordList[type].name,
      name: WordList.wordList[type].list[idx],
    };
  }
}
