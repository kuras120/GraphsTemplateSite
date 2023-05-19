import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './security/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import {ErrorComponent} from './components/error/error.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    // { path: 'login', component: LoginComponent },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
