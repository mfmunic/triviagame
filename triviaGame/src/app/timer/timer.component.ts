import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.scss"]
})
export class TimerComponent {
  timer: number = 800;

  constructor() {}

  startTimer() {
    if (this.timer > 0) {
      this.timer--;
      console.log(this.timer);
      setTimeout(this.startTimer, 1);
    }
  }
}
