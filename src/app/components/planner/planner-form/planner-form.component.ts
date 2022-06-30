import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-planner-form',
  templateUrl: './planner-form.component.html',
  styleUrls: ['./planner-form.component.scss'],
})
export class PlannerFormComponent implements OnInit {
  @Output()
  addTaskEvent = new EventEmitter<Task>();

  plannerForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.plannerForm = this.fb.group({
      task: [''],
    });
  }

  addTask(): void {
    this.addTaskEvent.emit({ task: this.plannerForm.value.task });
    this.plannerForm.reset();
  }
}
