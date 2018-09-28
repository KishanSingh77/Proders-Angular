import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from 'src/app/user-dashboard/user-dashboard.component';
import { LoginComponent } from 'src/app/login/login.component';

const routes: Routes = [
    { path: 'userDashboard', component: UserDashboardComponent },
    { path: 'app-login', component: LoginComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
