import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { RandomizeTriviaService } from "../randomize-trivia.service";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"]
})
export class QuestionComponent {
  @Output() end = new EventEmitter<boolean>();
  @Output() sendAnswered = new EventEmitter<boolean>();
  @Output() sendCorrect = new EventEmitter<boolean>();

  answered: number = 0;
  // correct: number = 0;
  quiz: object[];
  question: object;

  //the 'is' prefix refers to current question
  isCorrect: boolean = false;
  isAnswered: boolean = false;
  currAnswer: object = { id: 0, answer: "", explain: "", correct: false };

  constructor(private trivia: RandomizeTriviaService) {}

  ngOnInit() {
    this.quiz = this.trivia.randomize();
    this.question = this.trivia.setQuestion(this.quiz[this.answered]);
  }

  submitAnswer(clicked) {
    this.answered++;
    this.sendAnswered.emit();
    this.isAnswered = true;

    //@ts-ignore
    this.currAnswer = this.question.answers[clicked];

    //@ts-ignore
    if (this.currAnswer.correct === true) {
      this.isCorrect = true;
      this.sendCorrect.emit();
      // this.correct++;
    }
  }

  nextQuestion() {
    if (this.answered === this.quiz.length) {
      this.end.emit();
    } else {
      this.question = this.trivia.setQuestion(this.quiz[this.answered]);
      this.isAnswered = false;
      this.isCorrect = false;
    }
  }
}
