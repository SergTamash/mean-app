import { Injectable } from '@angular/core';
import { MeanDataService } from '../model/mean-data.service';
import { Observable } from 'rxjs';
import { EventItem } from '../model/event';

@Injectable()
export class EventsService {

  constructor(private meanDataService: MeanDataService) { }

  public getEventsList(): Observable<EventItem[]> {
    return this.meanDataService.getEventsList();
  }

  public createEvent(event: EventItem): Observable<EventItem> {
    return this.meanDataService.createEvent(event);
  }

  public updateEvent(event: EventItem): Observable<EventItem> {
    return this.meanDataService.updateEvent(event);
  }
}
