import {Component, OnInit} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Survey} from "../types/Survey";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  statuses: string[] = ['All', 'Active', 'Completed'];
  categories: string[] = ['Development', 'Workplace', 'Hardware'];
  filteredList: Survey[];

  status = 'status';
  category = "category";

  surveyList: Survey[] = [
    {
      title: "Designer Survey",
      category: "Workplace",
      status: "Active",
      label: "New Framework",
    },
    {
      title: "Developer Survey",
      category: "Development",
      status: "Active",
      label: "Education",
    },
    {
      title: "Backend Survey",
      category: "Hardware",
      status: "Completed",
      label: "Personal",
    }
  ];
  list1 = [];
  list2 = [];


  ngOnInit() {

  }

  onFilterSelected(filter: string, type: string) {

    console.log('type', type);
    console.log('filter', filter);
    if(type === 'status') {
      this.list1 = this.surveyList.filter((x) => x.status === filter);
    } else {
      this.list2 = this.surveyList.filter((x) => x.category === filter);
    }

    // compare value 2 array
    if(this.list2.length === 0) {
      this.filteredList = this.list1;
    } else {
      const intersection = this.list1.filter(element => this.list2.includes(element));
      this.filteredList = intersection;
    }

    // case All
    if(filter === 'All') {
      if(this.list2.length === 0) {
        this.filteredList = this.surveyList;
      } else {
        const intersection = this.surveyList.filter(element => this.list2.includes(element));
        this.filteredList = intersection;
      }
    }

    console.log('list1', this.list1);
    console.log('list2', this.list2);
  }
}
