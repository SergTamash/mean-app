import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventFormComponent } from './event-form/event-form.component';
import { EventsTableComponent } from './events-table/events-table.component';
import { EventsService } from './events.service';

@NgModule({
  declarations: [EventFormComponent, EventsTableComponent],
  imports: [
    CommonModule
  ],
  exports: [EventFormComponent, EventsTableComponent],
  providers: [EventsService]
})
export class EventModule { }
