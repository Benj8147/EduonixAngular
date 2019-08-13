import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'our project';

  text = 'Input text';
  doSomething(text) {
    console.log(this.text);
    return this.title;
  }
}
