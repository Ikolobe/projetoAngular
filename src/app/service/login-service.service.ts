import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario){
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {

      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];

      localStorage.setItem("token", token);

      // desabilite o comentario abaixo para saber o token
     // console.info("Token: "+ localStorage.getItem("token"));

      this.router.navigate(['home']);
    },
    error => {
      console.error("Erro ao fazer login")
      alert('Acesso Negado')
    }
    )

  }
}
