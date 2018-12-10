import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TimerComponent } from "./timer/timer.component";
import { DisplayAreaComponent } from "./display-area/display-area.component";
import { InstructionStartComponent } from "./instruction-start/instruction-start.component";

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    DisplayAreaComponent,
    InstructionStartComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
