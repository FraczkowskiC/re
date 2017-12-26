import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmailService } from './services/email.service';
import { HeaderComponent } from './shared/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PdfPreviewComponent } from './components/pdf-preview/pdf-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ModalComponent } from './shared/modal/modal.component';
import { LocationFilterPipe } from './shared/location-filter.pipe';
import { EmailFilterPipe } from './shared/email-filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    PdfPreviewComponent,
    ModalComponent,
    LocationFilterPipe,
    EmailFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    PdfViewerModule,
    FormsModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatProgressSpinnerModule

  ],
  entryComponents: [ModalComponent],

  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
