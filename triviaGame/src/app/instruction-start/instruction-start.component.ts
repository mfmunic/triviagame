import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActionsService } from "../actions.service";

@Component({
  selector: "app-instruction-start",
  templateUrl: "./instruction-start.component.html",
  styleUrls: ["./instruction-start.component.scss"]
})
export class InstructionStartComponent {
  @Output() start = new EventEmitter<boolean>();

  constructor() {}

  startQuiz() {
    this.start.emit();
  }
}
