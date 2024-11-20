import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ButtonComponent } from "../../shared/button/button.component";
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [ReactiveFormsModule, CalendarModule, ButtonComponent, FloatLabelModule],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css',
})
export class CalenderComponent {
  formGroup = new FormGroup({
    date: new FormControl(''),
    date1: new FormControl([]),
  });
  onSubmit() {
    console.log('Date:', this.formGroup.value.date);
    console.log('Date1:', this.formGroup.value.date1);
  }
}
