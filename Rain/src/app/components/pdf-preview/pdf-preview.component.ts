import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '../../services/email.service';
import { RequestModel } from '../../models/request-model';
import { ModalComponent } from '../../shared/modal/modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { environment } from '../../../environments/environment';

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
  selectedData: RequestModel;
  isSelectedData = false;
  filterExpression;
  pdfSrc: string;
  isActive: any;


  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService,
    public dialog: MatDialog,
    private router: Router,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {

    this.toastr.setRootViewContainerRef(vcr);
    this.requestData = new RequestModel;
    this.selectedData = new RequestModel;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.emailId = params['id'];
      this.page = 1;
    });
    this.getLocationData();
  }

  async getLocationData() {
    try {
      // this.pdfSrc = `${environment}/pdf/${this.emailId}.pdf`;
      this.pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
      this.emailService.getLocation().subscribe(resp => {
        this.data = resp;
      })
    } catch (error) {
      this.data = [];
    }
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

  selectedLocation(id, type) {
    if (id && type == "double") {
      this.isSelectedData = true;
      this.requestData = new RequestModel;
      this.selectedData = this.data.find(x => x.id == id)
      this.requestData.email = this.selectedData.email;
      this.requestData.name = this.selectedData.name;
      this.requestData.pdfId = this.emailId;
    } else {
      this.isActive = id;
      this.selectedData = this.data.find(x => x.id == id)
      this.requestData.email = this.selectedData.email;
      this.requestData.name = this.selectedData.name;
      this.requestData.pdfId = this.emailId;
    }
  }

  callBackFn(pdf: any) {
    this.pdfLength = pdf.numPages;
  }

  changePage(type) {
    if (type == "next") {
      this.page = (this.page < this.pdfLength) ? this.page + 1 : this.page;
    } else if (type == "pervious") {
      this.page = (this.page > 1) ? this.page - 1 : (this.page);
    } else if (type == "forward") {
      this.page = this.pdfLength;
    } else if (type == "backward") {
      this.page = 1;
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      height: '365px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.requestData.fileName = result;
        this.send();
      }
    });
  }

  send() {
    this.requestData.pdfId = this.emailId;
    // this.toastr.success('You are awesome!', 'Success!');
    this.router.navigate([`landing-page`]);
    // this.emailService.sendEmail(this.requestData).subscribe(result => {
    // this.requestData = new RequestModel;
    // this.router.navigate([`landing-page`]);
    // })
  }
}
