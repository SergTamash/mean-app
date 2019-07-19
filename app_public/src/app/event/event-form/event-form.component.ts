import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { EventItem } from '../../model/event';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  public event: EventItem;

  public eventForm = this.fb.group({
    name: ['', [Validators.required]],
    description: [''],
    address: ['', [Validators.required]],
    members:  this.fb.array([
      this.fb.group({
        name: ['some'],
        email: ['some']
      })
    ])
  });
  
  constructor(
    private eventsService: EventsService,
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  public createEvent(): void {
    this.eventsService.createEvent(this.event).subscribe();
  }

  public updateEvent(): void {
    this.eventsService.updateEvent(this.event).subscribe();
  }

  public get members() {
    return this.eventForm.get('members') as FormArray;
  }

  addMember() {
    this.members.push(this.fb.group({
      name: ['some'],
      email: ['some']
    }));
  }
  

  public onSubmit() {
    if (this.eventForm.invalid) {
      // TODO Add error message
      return;
    }
    this.eventsService.createEvent(this.eventForm.value).subscribe();
  }

}
