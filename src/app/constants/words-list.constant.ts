export interface WordListElement {
  //number of words in the list
  num: number;
  //name of the list type
  name: string;
  //list of the words
  list: Array<String>;
}
export interface Word {
  type: String;
  name: String;
}

export class WordList {
  //number of lists
  public static num: number = 3;
  public static wordList: WordListElement[] = [
    {
      num: 5,
      name: 'clothes',
      list: ['shirt', 'socks', 'trouser', 'hat', 'jeans'],
    },
    {
      num: 8,
      name: 'marvel superheros',
      list: [
        'spiderman',
        'ironman',
        'captainamerica',
        'antman',
        'blackpanther',
        'thor',
        'loki',
        'hulk',
      ],
    },
    {
      num: 9,
      name: 'Indian cities',
      list: [
        'jaipur',
        'hyderabad',
        'mysore',
        'delhi',
        'bengaluru',
        'pathna',
        'pune',
        'chennai',
        'chandigarh',
      ],
    },
  ];
}
