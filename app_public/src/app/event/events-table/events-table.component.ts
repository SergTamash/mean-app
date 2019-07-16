import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.scss']
})
export class EventsTableComponent implements OnInit {

  public eventsList;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEventsList().subscribe((events) => {
      this.eventsList = events;
    });
  }

}
