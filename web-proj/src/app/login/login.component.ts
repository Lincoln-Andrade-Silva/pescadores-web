import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private localService: LocalStorageService, private router: Router) { }

  user: User = new User; 

  ngOnInit(): void {
  
  }
  
  entrar(){
    if(this.user.name == "admin" && this.user.pass == "0000") {
      this.localService.saveData('token', 'admin')
      console.log(this.localService.getData('token'));
    }
    this.router.navigate(['/home']);
  }

  entrarSemLogin(){
    this.localService.clearData();
    this.router.navigate(['/home']);
  }
}
