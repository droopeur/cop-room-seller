import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

import { AppComponent } from './app.component';
import {routing} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from './environmnent/firebase.config';
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

  ],
  imports: [
    HttpClientModule,
    routing,
    BrowserModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
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
    NgxSmartModalModule.forRoot()
  ],
  providers: [AuthService,UserService,AuthGuard, UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
