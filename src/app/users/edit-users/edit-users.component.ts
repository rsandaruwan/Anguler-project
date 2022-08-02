import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

  userId : any;
  userDetails : any;
  editUserForm: FormGroup = new FormGroup({});
  dataLoaded :boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private userSrevice: UserService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe(data =>{
      this.userId = data.id;
    })

     if(this.userId !== ''){
      //  view user details
       this.userSrevice.viewUsers(this.userId)
       .toPromise()
       .then(data =>{
         this.userDetails = data;
        //  Object.assign(this.userDetails, data);
         console.log(this,this.userDetails);
         
        //  Build the edit form
        this.editUserForm = this.formBuilder.group({
          'username' : new FormControl(this.userDetails.name, [Validators.required, Validators.minLength(3)]),
          'email' : new FormControl(this.userDetails.email, [Validators.required, Validators.email]),
          'phone' : new FormControl(this.userDetails.phone, [Validators.required, Validators.maxLength(10)])
        })
        this.dataLoaded=  true;
       })
       .catch(err=>{
         console.log(err);
       })
     }

    }
    updateUser(){
      // console.log(this.editUserForm.value);
      this.userSrevice.updateUser(this.userId, this.editUserForm.value).subscribe(data =>{
        this._snackBar.open("User updateed successfully");
  
      }, err=>{ 
        this._snackBar.open("Unable to Update user");
      })
  }

}
