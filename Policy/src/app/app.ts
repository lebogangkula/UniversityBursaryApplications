import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Policy');

  VarsityBursaryApp() {
    window.open('https://lebogangkula.github.io/VarsityBursaryPhone/', '_blank');  }

    Subscribe(email:string){
    
  if(email !== "" && email.slice(-9) === "gmail.com"){
    window.open("https://www.youtube.com/@Honorableking99?sub_confirmation=1", "_blank");
  }
  
    
}
}
