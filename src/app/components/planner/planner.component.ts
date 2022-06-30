import { Component } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent {
  tasks = [
    {
      task: 'Wake up',
    },
    {
      task: 'Go to the gym',
    },
  ] as Task[];

  addTask(task: Task): void {
    this.tasks = [...this.tasks, task];
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
