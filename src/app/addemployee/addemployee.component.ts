import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css'
})
export class AddemployeeComponent {

  constructor(private router: ActivatedRoute){}
  onClick(){
    console.log("clicked");
    this.router.params.subscribe((params)=>console.log(params))
  }
}
