import { Component, OnInit } from "@angular/core";
import { RandomizeTriviaService } from "../randomize-trivia.service";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"]
})
export class QuestionComponent implements OnInit {
  answered: number = 0;
  correct: number = 0;
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
    this.isAnswered = true;

    //@ts-ignore
    this.currAnswer = this.question.answers[clicked];

    //@ts-ignore
    if (this.currAnswer.correct === true) {
      this.isCorrect = true;
      this.correct++;
    }
    console.log(this.answered, this.correct);
  }

  nextQuestion() {
    this.question = this.trivia.setQuestion(this.quiz[this.answered]);
    this.isAnswered = false;
    this.isCorrect = false;
  }
}
