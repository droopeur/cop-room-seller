import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

import { AppComponent } from './app.component';
import {routing} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {env} from './environmnent/firebase.config';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {DataTableModule} from 'angular-6-datatable';
import { TermsComponent } from './components/terms/terms.component';
import { LoginComponent } from './components/login/login.component';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {AuthGuard} from './services/auth.guard';
import {UserResolver} from './services/user.resolver';
import { GeneratorComponent } from './components/generator/generator.component';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import { ResultsComponent } from './components/home/results/results.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { CashReceiptComponent } from './components/cash-receipt/cash-receipt.component';
import { FicheListComponent } from './components/fiche-list/fiche-list.component';
import { AngularFireStorageModule} from "angularfire2/storage";
import { ShippingComponent } from './components/home/shipping/shipping.component';
import {RecaptchaModule} from "ng-recaptcha";
import { InfosComponent } from './components/home/infos/infos.component';
import {SidebarModule} from "ng-sidebar";
import { ExplanationsComponent } from './components/admin/explanations/explanations.component';
import {Angular2CsvModule} from "angular2-csv";
import {ScrollToModule} from "@nicky-lenaers/ngx-scroll-to";
import {DeviceDetectorModule} from "ngx-device-detector";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { InventoryComponent } from './components/inventory/inventory.component';
import { TranslatorComponent } from './components/home/translator/translator.component';
import { InvoiceTemplateComponent } from './components/invoices-list/invoice-template/invoice-template.component';
import {ToastrModule} from "ng6-toastr-notifications";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {Ng5SliderModule} from "ng5-slider";
import { QrcodeComponent } from './components/home/qrcode/qrcode.component';
import {QRCodeModule} from "angularx-qrcode";
import { RedirectComponent } from './components/home/redirect/redirect.component';
import { GeneratorSwitchComponent } from './components/generator-switch/generator-switch.component';
import { FicheComponent } from './components/popups/fiche/fiche.component';
import { FichePrinterComponent } from './components/popups/fiche/fiche-printer/fiche-printer.component';
import { InvoiceComponent } from './components/popups/invoice/invoice.component';
import { InvoicePrinterComponent } from './components/popups/invoice/invoice-printer/invoice-printer.component';
import { KeyPipe } from './pipes/key.pipe';

export class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    if (error.message.indexOf("No user logged in") !== -1) {
      return
    } else {
      // window.alert(error + ' \n Please reload the page')
console.error(error)
    }
    // do something with the exception
  }
}
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    TermsComponent,
    LoginComponent,
    GeneratorComponent,
    ResultsComponent,
    InvoicesComponent,
    InvoicesListComponent,
    CashReceiptComponent,
    FicheListComponent,
    ShippingComponent,
    InfosComponent,
    ExplanationsComponent,
    InventoryComponent,
    TranslatorComponent,
    InvoiceTemplateComponent,
    QrcodeComponent,
    RedirectComponent,
    GeneratorSwitchComponent,
    FicheComponent,
    FichePrinterComponent,
    InvoiceComponent,
    InvoicePrinterComponent,
    KeyPipe,


  ],
  imports: [
NgbModule,
    QRCodeModule,
    Ng5SliderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    routing,
    BrowserModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule,
    AngularFireModule.initializeApp(env.firebase),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AngularFirestoreModule,
    DataTableModule,
    AngularFireAuthModule,
    NgxSmartModalModule.forRoot(),
    AngularFireStorageModule,
    RecaptchaModule,
    SidebarModule.forRoot(),
    Angular2CsvModule,
    ScrollToModule.forRoot(),
    DeviceDetectorModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [AuthService,UserService,AuthGuard, UserResolver, InvoiceTemplateComponent,{provide: ErrorHandler, useClass: MyErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


