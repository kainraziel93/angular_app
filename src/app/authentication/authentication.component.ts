import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { User } from '../models/user';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
  user_form = new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    username:new FormControl(''),
    password:new FormControl(''),
    passwordVisibility:new FormControl(false as boolean)

  })
constructor(){}

register(){
  let user : User={
    firstname:this.user_form.get('firstname')?.value as string,
    lastname:this.user_form.get('lastname')?.value as string,
    username:this.user_form.get('username')?.value as string,
    password:this.user_form.get('password')?.value as string
  }
  console.log(user.password);
}
togglePasswordVisibility(){
  const passwordVisibilityControl = this.user_form.get('passwordVisibility') as FormControl;
 const visibility   = passwordVisibilityControl.value as boolean;
  passwordVisibilityControl.setValue(!visibility)   
  
  
}


}


