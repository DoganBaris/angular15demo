import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  sidebar = [
    { name: 'User Create', url: 'userList' },
    { name: 'Organization Create', url: 'organizationList' },
    // { name: 'Şifre Resetleme', url: 'passwordReset' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
