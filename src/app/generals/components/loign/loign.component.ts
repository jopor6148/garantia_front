import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-loign',
  templateUrl: './loign.component.html',
  styleUrls: ['./loign.component.scss']
})
export class LoignComponent implements OnInit {
  public form:FormGroup;
  constructor(
    private _formBuider:FormBuilder,
    private loginservice:LoginService,
    private storageService:StorageService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.form = this._formBuider.group({
      username:['',[Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login(){
    this.loginservice.login(this.form.getRawValue()).then(resp=>{

      if(resp.length > 0){
        this.storageService.save(resp[0]);
        this.router.navigate(['home']);
      }
    }).catch(err=>{

    });
  }  

}
