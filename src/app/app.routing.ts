import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import {TermsComponent} from './components/terms/terms.component';
import {AuthGuard} from './services/auth.guard';
import {LoginComponent} from './components/login/login.component';
import {UserResolver} from './services/user.resolver';
import {GeneratorComponent} from './components/generator/generator.component';
import {ResultsComponent} from './components/home/results/results.component';
import {InvoicesComponent} from './components/invoices/invoices.component';
import {InvoicesListComponent} from './components/invoices-list/invoices-list.component';
import {FicheListComponent} from "./components/fiche-list/fiche-list.component";
import {CashReceiptComponent} from "./components/cash-receipt/cash-receipt.component";
import {ShippingComponent} from "./components/home/shipping/shipping.component";
import {InfosComponent} from "./components/home/infos/infos.component";
import {ExplanationsComponent} from "./components/admin/explanations/explanations.component";
import {InventoryComponent} from "./components/inventory/inventory.component";
import {QrcodeComponent} from "./components/home/qrcode/qrcode.component";
import {RedirectComponent} from "./components/home/redirect/redirect.component";
import {GeneratorSwitchComponent} from "./components/generator-switch/generator-switch.component";
import {FicheComponent} from "./components/popups/fiche/fiche.component";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent,  },

  {
    path: 'admin', component: AdminComponent,resolve: { data: UserResolver}, children: [
      {
        path: 'generator', component: GeneratorSwitchComponent, children: [
          {path: 'particulier', component: GeneratorComponent},
          {path: 'pro', component: CashReceiptComponent}

        ]
      },
      {
        path: 'invoices/list', component: InvoicesListComponent
      },
      {
        path: 'invoices', component: InvoicesComponent
      },
      { path: 'fiche/:id', component: FicheComponent },
      {
        path: 'fiche-list', component: FicheListComponent
      },

      {
        path: 'cash-receipt', component: CashReceiptComponent
      },
      {
        path: 'inventory/all', component: InventoryComponent
      },
      {
        path: 'inventory/pending', component: InventoryComponent
      },
      {
        path: 'inventory/stock', component: InventoryComponent
      },
      {
        path: '**', component: ExplanationsComponent
      }

    ]
  },
  {
    path: 'red', component: AdminComponent,resolve: { data: UserResolver}, children: [
      { path: ':id', component: FicheListComponent },

    ]
  },

  {
    path: 'terms', component: TermsComponent
  },
  {path: 'shipping', component: ShippingComponent},
  {path: 'qrcode', component: QrcodeComponent},
  { path: 'qrcode/:id', component: QrcodeComponent },

  {path: 'home/results', component: ResultsComponent},
  {path: 'home/infos', component: InfosComponent},


  {
    path: '**', component: HomeComponent
  },



];

export const routing = RouterModule.forRoot(appRoutes);
