import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlannerComponent } from './components/planner/planner.component';
import { PlannerCardComponent } from './components/planner/planner-card/planner-card.component';
import { PlannerFormComponent } from './components/planner/planner-form/planner-form.component';
import { PlannerListComponent } from './components/planner/planner-list/planner-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlannerComponent,
    PlannerCardComponent,
    PlannerFormComponent,
    PlannerListComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
