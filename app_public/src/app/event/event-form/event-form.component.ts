import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { EventItem } from '../../model/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  public event: EventItem;
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.event = {
      name: "new Event",
      address: "address",
      author: {
        name: "Sergini",
        id: "dsada"
      },
      date: new Date(),
      members: []
    }
  }

  public createEvent(): void {
    this.eventsService.createEvent(this.event).subscribe();
  }

  public updateEvent(): void {
    this.eventsService.updateEvent(this.event).subscribe();
  }

}
