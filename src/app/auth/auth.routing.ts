import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const routesM: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
];

