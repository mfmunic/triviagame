import { Injectable } from "@angular/core";
import _ from "lodash";

import { trivia } from "../assets/quizQuestions";

@Injectable({
  providedIn: "root"
})
export class RandomizeTriviaService {
  constructor() {}

  //randomizes the order of the questions
  randomize() {
    const randomOrder = [];
    const thisManyTimes = trivia.length;

    for (let j = 0; j < thisManyTimes; j++) {
      const randoNo = Math.floor(Math.random() * trivia.length);
      randomOrder.push(trivia[randoNo]);
      trivia.splice(randoNo, 1);
    }
    return randomOrder;
  }

  //randomizes the answers in the question
  setQuestion(question) {
    const answers = [
      {
        id: 0,
        answer: question.correct,
        explain: "You are correct!",
        correct: true
      }
    ];

    question.wrong.forEach((answer, index) => {
      answers.push({
        id: 0,
        answer,
        explain: question.explain[index],
        correct: false
      });
    });

    const thisManyTimes = answers.length;
    question.answers = [];

    for (let j = 0; j < thisManyTimes; j++) {
      const randoNo = Math.floor(Math.random() * answers.length);
      answers[randoNo].id = j;
      question.answers.push(answers[randoNo]);
      answers.splice(randoNo, 1);
    }

    return question;
  }
}
