import { Component } from "@angular/core";

@Component({
  selector: "app-display-area",
  templateUrl: "./display-area.component.html",
  styleUrls: ["./display-area.component.scss"]
})
export class DisplayAreaComponent {
  start: boolean = true;
  end: boolean = false;
  correct: number = 0;
  answered: number = 0;

  constructor() {}

  changeStart() {
    this.start = false;
  }

  changeEnd() {
    this.end = true;
  }

  answeredQuestion() {
    this.answered++;
  }

  answerCorrect() {
    this.correct++;
  }

  playAgain() {
    this.start = true;
    this.end = false;
    this.correct = 0;
    this.answered = 0;
  }
}
