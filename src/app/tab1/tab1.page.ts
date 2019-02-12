import { Component, NgModule
} from '@angular/core';
import {
  ReactiveFormsModule, FormsModule, FormBuilder, NgForm
} from '@angular/forms';
//import {tab1Page} from "src/app/tab1";
import {Subject} from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
//@NgModule(
 //   declarations:[
 //       Tab1Page],
//)
export class Tab1Page {
  unAttribut : String = "Formulaire de contact";
  formulaire={username:"",password:""} 
onSubmitForm(form : NgForm)
{  var nomuser=this.formulaire.username;
  var motpass=this.formulaire.password;
  
} 
}
export class Membre {
  membre = {
    username: String,
    password: String,
    constructor(membre: { password: StringConstructor; username: StringConstructor; constructor(name: String): void; }) {
      this._membre = membre;
    }

  };
}
//class EventEmitter <onSubmitForm> extends Subject{
//@output() onSubmitForm = new EventEmitter();

