import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../../services/email.service';
import { RequestModel } from '../../models/request-model';

@Component({
  selector: 'app-pdf-preview',
  templateUrl: './pdf-preview.component.html',
  styleUrls: ['./pdf-preview.component.less']
})
export class PdfPreviewComponent implements OnInit {
  emailId: string;
  page: number;
  showAll = false;
  data = [];
  isLocation = false;
  locationEmail="";
  requestData: RequestModel;

  constructor(private route: ActivatedRoute, private emailService: EmailService) { }
  pdfSrc: string = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.emailId = params['id'];
      this.page = 1;
    });
    this.getLocationData();
  }

  getLocationData(){
    this.emailService.getLocation().subscribe(resp => {
      this.data = resp;
    })
  }

  showLocationList(){
    this.isLocation = true;
  }

  hideLocationList(){
    this.isLocation = false;
  }

  selectedLocation(id){
    this.requestData = new RequestModel;
    var selectedData = this.data.find(x => x.id == id)
    this.requestData.email = selectedData.email;
    this.requestData.name = selectedData.name;
    this.requestData.pdfId = this.emailId;   
  }
}
