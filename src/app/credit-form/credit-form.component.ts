import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css'],
})
export class CreditFormComponent implements OnInit {
  // number: number;
  // name: string;
  // month: number;
  // year: number;
  // CVV: number;
  public cardMask = [
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    ' ',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    ' ',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    ' ',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
  ];
  forma = {
    number: '',
    name: '',
    month: '',
    year: '',
    CVV: '',
  };
  public flipCard = {
    flipover: false,
    backgroundchanged: false,
  };
  public SquarePosition = {
    'whiteSquare-name': false,
    'whiteSquare-date': false,
    'whiteSquare-number': false,
  };
  frontFace: boolean = true;
  backFace: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  formSubmit(event) {
    event.preventDefault();
    console.log(this.forma);
  }
  checkNumber(ev) {}
  onFocus() {
    console.log('LOOL');
    this.flipCard.flipover = true;
    this.flipCard.backgroundchanged = true;
    setTimeout(() => {
      this.frontFace = false;
      this.backFace = true;
    }, 400);
  }
  onBlur() {
    console.log('LOL2');
    this.flipCard.flipover = false;
    this.flipCard.backgroundchanged = false;
    setTimeout(() => {
      this.frontFace = true;
      this.backFace = false;
    }, 400);
  }
  frontface() {
    if (this.frontFace) {
      return 'flex';
    } else {
      return 'none';
    }
  }
  backface() {
    if (this.backFace) {
      return 'flex';
    } else {
      return 'none';
    }
  }
  whiteSquare(position) {
    if (position == 'name') {
      this.SquarePosition['whiteSquare-date'] = false;
      this.SquarePosition['whiteSquare-number'] = false;
      this.SquarePosition['whiteSquare-name'] = true;
    } else if (position == 'number') {
      this.SquarePosition['whiteSquare-number'] = true;
      this.SquarePosition['whiteSquare-date'] = false;
      this.SquarePosition['whiteSquare-name'] = false;
    } else if (position == 'date') {
      this.SquarePosition['whiteSquare-date'] = true;
      this.SquarePosition['whiteSquare-name'] = false;
      this.SquarePosition['whiteSquare-number'] = false;
    } else {
      this.SquarePosition['whiteSquare-date'] = false;
      this.SquarePosition['whiteSquare-name'] = false;
      this.SquarePosition['whiteSquare-number'] = false;
    }
  }
}
