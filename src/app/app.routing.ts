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

const appRoutes: Routes = [
  { path: 'home/results', component: ResultsComponent,  },
  { path: 'login', component: LoginComponent,  },

  {
    path: 'admin', component: AdminComponent,resolve: { data: UserResolver}
  },
  {
    path: 'generator', component: GeneratorComponent,resolve: { data: UserResolver}
  },
  {
    path: 'invoices/list', component: InvoicesListComponent,resolve: { data: UserResolver}
  },
  {
    path: 'invoices', component: InvoicesComponent,resolve: { data: UserResolver}
  },

  {
    path: 'terms', component: TermsComponent
  },
  {
    path: '**', component: HomeComponent
  },



];

export const routing = RouterModule.forRoot(appRoutes);
