import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";
import { ActionsService } from "../actions.service";

@Component({
  selector: "app-final-score",
  templateUrl: "./final-score.component.html",
  styleUrls: ["./final-score.component.scss"]
})
export class FinalScoreComponent {
  subscription: Subscription;
  @Input("correct") correct: number;
  @Input("answered") answered: number;
  @Output() again = new EventEmitter<boolean>();
  time: number;
  average: number;
  constructor(private timer: ActionsService) {
    this.timer.timeTotaled$.subscribe(data => {
      data = (data * 20) / 1000;
      this.time = +data.toFixed(2);
      this.average = this.time / this.answered;
    });
  }
  playAgain() {
    // this.again.emit();
    location.reload();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
