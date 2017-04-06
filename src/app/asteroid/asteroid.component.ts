import { Component } from '@angular/core';

import { AsteroidService } from '../asteroid.service';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { Router} from '@angular/router';


@Component({
  selector: 'asteroid',
  templateUrl: './asteroid.component.html'
})
export class AsteroidComponent {

  asteroidDetails: any;
  data: Array<any> = [];
  private id: string;
  private subscription: Subscription;

  constructor(private asteroidService: AsteroidService, private activateRoute: ActivatedRoute, private router: Router) {
    this.subscription = activateRoute.params.subscribe(params=>{
      this.id=params['id'];
      this.asteroidDetails = this.asteroidService.getDetails(this.id);
      if (this.asteroidDetails == null){
        this.router.navigate(
          ['/notFound'],
        );
      }
      else{
        this.data.push(
          {
            key: 'neo_reference_id',
            value: this.asteroidDetails['neo_reference_id']
          },
          {
            key: 'absolute_magnitude_h',
            value: this.asteroidDetails['absolute_magnitude_h']
          },
          {
            key: 'name',
            value: this.asteroidDetails['name']
          },
          {
            key: 'nasa_jpl_url',
            value: this.asteroidDetails['nasa_jpl_url']
          },
          {
            key: 'is_potentially_hazardous_asteroid',
            value: this.asteroidDetails['is_potentially_hazardous_asteroid']
          },
        )
      }
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
