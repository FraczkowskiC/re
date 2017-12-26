import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '../../services/email.service';
import { RequestModel } from '../../models/request-model';
import { ModalComponent } from '../../shared/modal/modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-pdf-preview',
  templateUrl: './pdf-preview.component.html',
  styleUrls: ['./pdf-preview.component.less']
})
export class PdfPreviewComponent implements OnInit {
  emailId: string;
  page: number = 1;
  showAll = false;
  data = [];
  isLocation = false;
  locationEmail = "";
  requestData: RequestModel;
  pdfLength: number;
  closeResult: string;
  selectedData : RequestModel;
  isSelectedData = false;
  filterExpression;
  constructor(
    private route: ActivatedRoute,
     private emailService: EmailService,
     public dialog: MatDialog,
     private router: Router) {

    this.requestData = new RequestModel;
    this.selectedData = new RequestModel;
   }
  pdfSrc: string = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.emailId = params['id'];
      this.page = 1;
    });
    this.getLocationData();
  }

  getLocationData() {
    this.emailService.getLocation().subscribe(resp => {
      this.data = resp;
    })
  }
  showLocationList() {
    this.isLocation = true;
  }

  hideLocationList() {
    this.isLocation = false;
    this.requestData = new RequestModel;
    this.selectedData = new RequestModel;   
    this.isSelectedData = false;
    this.filterExpression = null;
  }

  selectedLocation(id) {
    if(id){
      this.isSelectedData = true;
      this.requestData = new RequestModel;
      this.selectedData = this.data.find(x => x.id == id)
      this.requestData.email = this.selectedData.email;
      this.requestData.name = this.selectedData.name;
      this.requestData.pdfId = this.emailId;
    }
  }

  manualLocation(){

  }

  callBackFn(pdf: any) {
    this.pdfLength = pdf.numPages;
  }

  changePage(type) {
    if (type == "next") {
      this.page = (this.page < this.pdfLength)? this.page + 1 : this.page;
    } else if (type == "pervious") {
      this.page = (this.page > 1)? this.page - 1 : (this.page);
    } else if (type == "forward") {
        this.page = this.pdfLength;
    } else if (type == "backward") {
      this.page = 1;
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      height: '40vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        this.requestData.fileName = result;
        this.send();
      }
    });
  }

  send(){
    this.requestData.pdfId = this.emailId;
    console.log(this.requestData);
    this.router.navigate([`landing-page`]);
    // this.emailService.sendEmail(this.requestData).subscribe(result => {
    // this.requestData = new RequestModel;
    // this.router.navigate([`landing-page`]);
    // })
  }
}
