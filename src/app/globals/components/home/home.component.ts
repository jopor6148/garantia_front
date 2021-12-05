import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { StorageService } from 'src/app/generals/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public userinfo:any = {};
  constructor(
    private storage:StorageService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.userinfo = this.storage.get();
  }

  salir(){
    this.storage.clear();
    this.route.navigate(['']);
  }

}
