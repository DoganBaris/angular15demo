import { UserService } from '../../core/services/user.service';
import { Groups, UserAddRequest } from '../../common/model/user/userAddRequest';
import { GroupService } from '../../core/services/group.service';
import { GroupResponse } from '../../common/model/group/groupResponse';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calling',
  templateUrl: './calling.component.html',
  styleUrls: ['./calling.component.css']
})
export class CallingComponent implements OnInit {

  roles = [
    { Name: "Mobil", Code: "Anonymous" },
    { Name: "Supervisor", Code: "Admin" },
    { Name: 'Temsilci', Code: "Regular" }
  ]




  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {

  }
}