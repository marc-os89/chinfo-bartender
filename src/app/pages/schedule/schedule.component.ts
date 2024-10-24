
import { Component } from '@angular/core';

import { ContainerComponent } from '../../components/container/container.component';
import { ScheduleFormComponent } from '../../components/schedule-form/schedule-form.component';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    ContainerComponent,
    ScheduleFormComponent
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {

}
