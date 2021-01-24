import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  showMenu = false;
  ngOnInit(): void {
  }

  toggleMenu = () =>{
    this.showMenu = !this.showMenu
  }
  goToHome = () =>{
    this.router.navigateByUrl('welcome')
  }

  goToAuth = (page) =>{
    if(page === 'signup'){
      this.router.navigateByUrl('auth')
    }
    if(page === 'login'){
      this.router.navigateByUrl('auth/login')
    }
    this.showMenu = false;

  }

}
