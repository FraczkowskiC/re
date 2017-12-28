import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.less']
})
export class LandingPageComponent implements OnInit {
  data: any = [];

  constructor(private emailService: EmailService, private router: Router) { }

  ngOnInit() {
    this.getFaxData();
  }

  getFaxData(){
    this.emailService.get().subscribe(response => {
      this.data = response
    })
  }

  emailPreview(emailId){
    this.router.navigate([`pdf-preview/` + emailId]);
  }
}
