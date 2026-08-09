import { Component, signal } from '@angular/core';
import { email, form, FormRoot, required, FormField } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from "@angular/material/icon";
import { MatGridListModule } from '@angular/material/grid-list';

type ContactModel = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

@Component({
  selector: 'app-contact',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormRoot, FormField, MatIcon, MatGridListModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactModel = signal<ContactModel>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  contactForm = form(this.contactModel, (fieldPath) => {
    required(fieldPath.name,{ message: 'Name is required' });
    required(fieldPath.email, { message: 'Email is required' });
    email(fieldPath.email, { message: 'Invalid email format' });
    required(fieldPath.subject, { message: 'Subject is required' });
    required(fieldPath.message, { message: 'Message is required' });
  });

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.contactModel());
    alert('Form submitted! Check the console for the form data.' + JSON.stringify(this.contactModel()));
    this.contactModel.set({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }
}
