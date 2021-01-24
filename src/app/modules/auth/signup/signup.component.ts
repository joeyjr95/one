import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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
