import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  @Input('usertoshow') userid;
  @Output() close: EventEmitter<any> = new EventEmitter;
  public user: any = {};
  public showmodal: boolean = false;
  public form: FormGroup;
  constructor(
    private userservice: UsersService,
    private _formb: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log('este es el usuario a buscar',this.userid);
    
    this.form = this._formb.group({
      username: '',
      correo: '',
      telefono: '',
      password:'',
      id: this.userid
    });
    this.userservice.get(this.userid).then(resp => {
      if (resp.length) {
        this.user = resp[0];
        this.showmodal = true;
        this.form.patchValue({
          username: this.user.username,
          correo: this.user.correo,
          telefono: this.user.telefono,
          password: this.user.password
        });
      } else {
        this.close.emit();
      }
    }).catch(err => {

    });
  }

  save() {
    this.userservice.update(this.form.getRawValue()).then(resp => {
      this.close.emit();
    })
  }
}
