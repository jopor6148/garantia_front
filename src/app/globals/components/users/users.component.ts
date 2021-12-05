import { Component, OnChanges, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public usersbucket:Array<any> = [];
  public showprofile:boolean = false;
  public profiletoshow:number =0;
  public showuser: boolean = false;
  public usertoshow: number = 0;
  constructor(
    private userservice:UsersService
  ) { }

  ngOnInit(): void {
    this.fillUsers();
  }


  actions(event,action,element){
    console.log(event, action, element);
    if (action == 'perfil'){
      this.showprofile = true;
      this.profiletoshow = element;
    } else if (action == 'ver') {
      this.showuser = true;
      this.usertoshow = element;
    }else{
      this.userservice.update({id:element,estatus:0}).then(resp=>{
        this.fillUsers()
      })
    }
  }

  fillUsers(){
    this.userservice.getAll().then(resp => {
      this.usersbucket = resp;
    }).catch(err => {

    });
  }

  closemodal(){
    this.usersbucket = [];
    this.showprofile = false
    this.showuser = false
    this.fillUsers();
  }

}
