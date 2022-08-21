import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})



export class ContactUsComponent implements OnInit {
formFieldHelpers: string[] = [''];
  constructor(private _formBuilder: FormBuilder) { }
  getFormFieldHelpersAsString(): string
  {
      return this.formFieldHelpers.join(' ');
  }

  ngOnInit(): void {
  }

}
