import { Injectable, Output } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ActionsService {
  @Output() start: boolean = true;
  constructor() {}

  changeStart() {
    this.start = false;
    console.log("In Action", this.start);
  }
}
