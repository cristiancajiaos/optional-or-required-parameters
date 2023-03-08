import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  public user: User = {
    name: 'Angry Dos',
    email: 'angrydos@darkorder.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
