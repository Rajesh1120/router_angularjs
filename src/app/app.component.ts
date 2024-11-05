import { Component } from '@angular/core';
import {RouterModule, RouterOutlet } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,AddemployeeComponent,RoomsComponent,RouterModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample-routes-practice';
}
