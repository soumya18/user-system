import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as _ from 'lodash';

@Injectable()
export class UsersService {
  private serviceurl: string = '';

  constructor(private http: Http) {}
  /**
   * To save user details on server
   */
  saveUserData() {}

}
