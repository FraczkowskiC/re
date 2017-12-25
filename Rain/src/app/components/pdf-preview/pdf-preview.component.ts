import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../../services/email.service';
import { RequestModel } from '../../models/request-model';
import { ModalComponent } from '../../shared/modal/modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private route: ActivatedRoute, private emailService: EmailService, private modalService: NgbModal) {
    this.requestData = new RequestModel;
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
  }

  selectedLocation(id) {
    this.requestData = new RequestModel;
    var selectedData = this.data.find(x => x.id == id)
    this.requestData.email = selectedData.email;
    this.requestData.name = selectedData.name;
    this.requestData.pdfId = this.emailId;
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

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  send(){
    this.requestData.pdfId = this.emailId;
    console.log(this.requestData);
  }
}
