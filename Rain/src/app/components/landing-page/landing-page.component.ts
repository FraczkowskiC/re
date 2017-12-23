import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {
  data: any = [];

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.getFaxData();
  }

  getFaxData(){
    this.emailService.get().subscribe(response => {
      this.data = response
      console.log(this.data)
    })
  }
}
