import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-final-score",
  templateUrl: "./final-score.component.html",
  styleUrls: ["./final-score.component.scss"]
})
export class FinalScoreComponent {
  @Input("correct") correct: number;
  @Input("answered") answered: number;
  @Output() again = new EventEmitter<boolean>();
  constructor() {}
  playAgain() {
    // this.again.emit();
    location.reload();
  }
}
