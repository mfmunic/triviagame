import { Injectable, Output } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ActionsService {
  @Output() start: boolean = true;

  changeStart() {
    this.start = false;
  }

  time: number = 0;

  // Observable string sources
  private startTimer = new Subject<boolean>();
  private stopTimer = new Subject<boolean>();
  private resetTimer = new Subject<number>();
  private forceNext = new Subject<boolean>();
  private totalTime = new Subject<number>();

  // Observable string streams
  timerStarted$ = this.startTimer.asObservable();
  timerStopped$ = this.stopTimer.asObservable();
  timerReset$ = this.resetTimer.asObservable();
  nextForced$ = this.forceNext.asObservable();
  timeTotaled$ = this.totalTime.asObservable();

  // Service message commands
  startQuizTimer() {
    this.startTimer.next();
  }

  pauseQuizTimer() {
    this.stopTimer.next(true);
  }

  addTime(ticks) {
    this.time += 500 - ticks;
    this.totalTime.next(this.time);
  }

  resetQuizTimer() {
    this.resetTimer.next(500);
    this.stopTimer.next(false);
    this.startTimer.next();
  }

  forceNextQuestion() {
    // this.resetQuizTimer();
    this.forceNext.next();
  }
}
