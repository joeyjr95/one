import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  showMenu = false;
  ngOnInit(): void {
  }

  toggleMenu = () => {
    this.showMenu = !this.showMenu
  }
  goToHome = () => {
    this.router.navigateByUrl('home')
  }
}
