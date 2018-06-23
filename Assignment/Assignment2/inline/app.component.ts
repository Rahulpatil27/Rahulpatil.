import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
    <input type="text" name="fieldName" value="Marvellous Infosystem" readonly><br>
    <input type="text" name="fieldName" value="">
    </div>`,
  styles: [`
  {
    background-color:#6d8eeb;
    width:200px;
    height:3em;
  }
   `]
})
export class AppComponent {
  title = 'inline';
}
