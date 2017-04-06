import { Component } from '@angular/core';

import { AsteroidService } from '../asteroid.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Router} from '@angular/router';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  asteroids : any;
  source: LocalDataSource = new LocalDataSource();
  settings = {
    actions: false,
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Asteroid Name'
      },
      magnitude:{
        title: 'Absolute Magnitude'
      }
    }
  };

  transform(asteroids){
    let data = []
    for(let obj in asteroids.near_earth_objects){
      for(let i = 0; i < asteroids.near_earth_objects[obj].length; i++){
        data.push({
          id: asteroids.near_earth_objects[obj][i].neo_reference_id,
          name: asteroids.near_earth_objects[obj][i].name,
          magnitude: asteroids.near_earth_objects[obj][i].absolute_magnitude_h,
        });
      }
    }
    return data
  }

  constructor(private asteroidService: AsteroidService, private router: Router) {
    let cash = this.asteroidService.getFromCash();
    if (cash){
      this.source.load(this.transform(cash));
    }
    else{
      this.asteroidService.list().then((response) => {
        this.source.load(this.transform(response));
      });
    }
  }

  ngOnInit(): void {
  }

  onUserRowSelect(event): void {
    this.router.navigate(
      ['/details', event.data.id],
    );
  }
}
