import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/generals/services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input('profile') idprofile;
  @Output() close:EventEmitter<any> = new EventEmitter;
  public profile:any =  {};
  public showmodal:boolean = false;
  public form:FormGroup;
  constructor(
    private profileservice:ProfileService,
    private _formb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this._formb.group({
      nombre:'',
      descripcion:'',
      id:''
    })
    this.profileservice.get(this.idprofile).then(resp=>{
      if(resp.length){
        this.profile = resp[0];
        this.showmodal = true;
        this.form.patchValue({
          nombre:this.profile.nombre,
          descripcion: this.profile.descripcion,
          id:this.profile.id
        });
      }else{
        this.close.emit();
      }
    }).catch(err=>{

    });
  }

  save(){
    this.profileservice.update(this.form.getRawValue()).then(resp=>{
      this.close.emit();
    })
  }

}
