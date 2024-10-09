import { Component} from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent{

  public contactForm!: FormGroup;

  public answerForm!: object; 
  public name!: string;
  public new_email!: string;
  public new_message!: string;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]]
    });
  }

  get firstName() { return this.contactForm.get('firstName'); }
  get lastName() { return this.contactForm.get('firstName'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  onResetForm(): void {
    this.contactForm.reset();
  }

  saveForm(): void {
    if (this.contactForm.valid) {
      this.sendEmail();
      console.log(this.contactForm.value);
      this.onResetForm();
    }
  }
  
  sendEmail() {
    this.name = this.contactForm.value['firstName'] + ' ' + this.contactForm.value['lastName'];
    this.new_email = this.contactForm.value['email'];
    this.new_message = this.contactForm.value['message'];

    const templateParams = {
      to_name: 'Luis',
      from_name: 'Alejandro',
      message: 'Nombre: ' + this.name + ', Contacto: ' + this.new_email + ', Message: ' + this.new_message  
    };

    emailjs.send('service_gdulyik', 'template_3tkdkng', templateParams, '5cQNGdQHfk9sZnKOg')
      .then((response) => {
         console.log('Correo enviado!', response.status, response.text);
      }, (err) => {
         console.error('Falló el envío del correo...', err);
      });
  }

}