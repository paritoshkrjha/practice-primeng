import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from 'primeng/autocomplete';
import { CalenderComponent } from "./calender/calender.component";

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [AutoCompleteModule, FormsModule, CalenderComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  items: any[] | undefined;
  date: Date = new Date();

  selectedItem: any;

  suggestions: any[] = [];

  search(event: AutoCompleteCompleteEvent) {
    this.suggestions = [...Array(10).keys()].map(
      (item) => event.query + '-' + item
    );
  }
}
