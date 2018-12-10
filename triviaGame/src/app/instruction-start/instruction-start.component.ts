import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-instruction-start",
  templateUrl: "./instruction-start.component.html",
  styleUrls: ["./instruction-start.component.scss"]
})
export class InstructionStartComponent implements OnInit {
  start: boolean = true;
  constructor() {}

  ngOnInit() {}

  startQuiz() {
    this.start = false;
  }
}
