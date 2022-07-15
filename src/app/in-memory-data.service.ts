import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDataService {
  createDb () {
    const cities = [
      { id: 1, name: 'Madrid'},
      { id: 2, name: 'Lisboa'},
      { id: 3, name: 'London'},
      { id: 4, name: 'Paris'},
      { id: 5, name: 'Barcelona'},
    ]
    return {cities};
  }
}