import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  public user: User = {
    name: 'John Doe',
    email: 'johndoe@mail.com'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
