import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  title = 'task_mangement';
  // name = ""
  // fullname: string = "Hello";  
  // interpolation = 'Data binding example using String Interpolation';  
  // numberA: number = 10;    
  // numberB: number = 20; 

  // addTwoNumbers() {    
  //   return this.numberA * this.numberB;    
  // }  
  onSave(event){    
    console.log("Save Data", event);    
  } 
            
}
