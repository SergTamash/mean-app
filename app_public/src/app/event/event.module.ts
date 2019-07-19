import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventFormComponent } from './event-form/event-form.component';
import { EventsTableComponent } from './events-table/events-table.component';
import { EventsService } from './events.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModulesCompilationModule } from '../common/modules-compilation.module';

@NgModule({
  declarations: [EventFormComponent, EventsTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModulesCompilationModule,
    ReactiveFormsModule,
    // AppRoutingModule
  ],
  exports: [EventFormComponent, EventsTableComponent],
  providers: [EventsService]
})
export class EventModule { }
