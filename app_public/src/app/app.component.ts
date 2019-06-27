import { Component } from '@angular/core';
import { MeanDataService } from './model/mean-data.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private meanDataService: MeanDataService) {

  }
  public testCall(): void {
    this.meanDataService.testRequest().subscribe((res) => {
      debugger;
      console.log(res);
    });
  }
  title = 'app-public';
}
