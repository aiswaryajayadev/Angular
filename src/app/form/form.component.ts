import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cat } from '../models/cat.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  email: string = '';
  imageDetails: Cat = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg',
    alt: 'cat',
  };

  isOk: boolean = false
  okFunction(e: any) {
    console.log(e);
    let value = e.target.value.trim();
    this.isOk = value ? true : false;
  }
}
