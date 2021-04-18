import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', points: 0 },
      { id: 12, name: 'Narco', points: 10 },
      { id: 13, name: 'Bombasto', points: 20 },
      { id: 14, name: 'Celeritas', points: 30 },
      { id: 15, name: 'Magneta', points: 40 },
      { id: 16, name: 'RubberMan', points: 50 },
      { id: 17, name: 'Dynama', points: 60 },
      { id: 18, name: 'Dr IQ', points: 70 },
      { id: 19, name: 'Magma', points: 80 },
      { id: 20, name: 'Tornado', points: 90 }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 
      ? Math.max(...heroes.map(hero => hero.id)) + 1 
      : 11;
  }
}