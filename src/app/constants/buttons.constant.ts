export interface Btn {
  val: string;
  touched: boolean;
}
export class Buttons {
  public static buttons: Btn[] = [
    { val: 'a', touched: false },
    { val: 'b', touched: false },
    { val: 'c', touched: false },
    { val: 'd', touched: false },
    { val: 'e', touched: false },
    { val: 'f', touched: false },
    { val: 'g', touched: false },
    { val: 'h', touched: false },
    { val: 'i', touched: false },
    { val: 'j', touched: false },
    { val: 'k', touched: false },
    { val: 'l', touched: false },
    { val: 'm', touched: false },
    { val: 'n', touched: false },
    { val: 'o', touched: false },
    { val: 'p', touched: false },
    { val: 'q', touched: false },
    { val: 'r', touched: false },
    { val: 's', touched: false },
    { val: 't', touched: false },
    { val: 'u', touched: false },
    { val: 'v', touched: false },
    { val: 'w', touched: false },
    { val: 'x', touched: false },
    { val: 'y', touched: false },
    { val: 'z', touched: false },
  ];
  public static reset() {
    for (let i = 0; i < 26; i++) {
      Buttons.buttons[i].touched = false;
    }
  }
}
