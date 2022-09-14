import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public titulo: string = "Bem-vindo, faça seu login!"

  public entrar() {
    console.log("Logado!");
  }
  
  constructor() { }

  ngOnInit(): void { }

}
