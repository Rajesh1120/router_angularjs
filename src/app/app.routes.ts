import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { RoomsComponent } from './rooms/rooms.component';

export const routes: Routes = [
    {
        path:'addemployee',component: AddemployeeComponent
    },
    {
        path:'rooms' , component: RoomsComponent
    },
    {
        path:"", redirectTo:"/addemployee" , pathMatch:'full'
    },
    {
        path:"rooms/:id", component:RoomsComponent
    },
    {
        path:'employee/:id', component:AddemployeeComponent
    }

]
