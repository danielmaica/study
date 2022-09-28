import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <img src="../assets/img/fluidLogo.png" alt="" 
      style="
        display:flex;

        margin-top: 30px;
        margin-bottom: -30px;
        margin-left:auto;
        margin-right:auto;

        width:25vw;
        height:6vh;
      "
    >
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app-todo';
}
