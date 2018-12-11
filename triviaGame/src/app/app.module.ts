import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TimerComponent } from "./timer/timer.component";
import { DisplayAreaComponent } from "./display-area/display-area.component";
import { InstructionStartComponent } from "./instruction-start/instruction-start.component";
import { QuestionComponent } from "./question/question.component";

import { RandomizeTriviaService } from "./randomize-trivia.service";

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    DisplayAreaComponent,
    InstructionStartComponent,
    QuestionComponent
  ],
  imports: [BrowserModule],
  providers: [RandomizeTriviaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
