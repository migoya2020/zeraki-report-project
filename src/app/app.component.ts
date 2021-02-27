import { Component } from '@angular/core';
// import {TableComponent} from './components/table/table.component'
import { RestApiService } from "./shared/rest-api.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zeraki-report-project';
 Results = {}

constructor( public restApi: RestApiService ) { }

 ngOnInit() {
    this.loadResults()
  }
 // Get employees list
  loadResults() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Results = data;
      console.log(this.Results )
    })
  }



}

