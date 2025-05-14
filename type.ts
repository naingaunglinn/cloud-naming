export interface WordItem {
    english: string;
    burmese: string;
    wordClass: string;
    pronounciation: string;
    audio: string;
  }
  
  export interface VocabData {
    [week: string]: WordItem[];
  }