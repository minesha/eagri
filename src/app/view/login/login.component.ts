import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:String;
  constructor(private route:Router) { }

  ngOnInit() {
  }


  login(){
    this.route.navigate(['/home'])
  }
}
