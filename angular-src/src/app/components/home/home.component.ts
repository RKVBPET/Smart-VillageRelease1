import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService,) { }

  private redirectURL;
  amount:Number;

  ngOnInit() {
  }

  pay(amount){
  	const donationAmount={
  		amt:this.amount
  	}
  	console.log("donationAmount",donationAmount);
  	this.authService.pay(donationAmount).subscribe(data=>{
  		this.redirectURL=data.href;
  		window.location.href=this.redirectURL;
  	},error=>console.log(error));

  }

  
}
