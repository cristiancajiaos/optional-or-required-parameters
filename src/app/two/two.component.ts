import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  public user: User = {
    name: 'Evil Uno',
    email: 'eviluno@darkorder.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
