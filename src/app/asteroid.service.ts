import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import * as SETTINGS from '../../settings.json'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AsteroidService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private asteroids: any;
  constructor(private http: Http) { }

  getDetails(id: string) {
    if (!this.asteroids){
      return null;
    }
    for(let obj in this.asteroids.near_earth_objects){
      for(let i = 0; i < this.asteroids.near_earth_objects[obj].length; i++){
        if (this.asteroids.near_earth_objects[obj][i].neo_reference_id == id){
          return this.asteroids.near_earth_objects[obj][i];
        }
      }
    }
    return null;
  }

  getFromCash(){
    return this.asteroids
  }

  list(): Promise<any> {
    return this.http
      .get((<any>SETTINGS).URL + '/list', {headers: this.headers})
      .toPromise()
      .then((res) => {
        this.asteroids = res.json();
        return this.asteroids;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

