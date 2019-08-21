import {TestBed} from '@angular/core/testing';

import {RollService} from './roll.service';

describe('RollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RollService = TestBed.get(RollService);
    expect(service).toBeTruthy();
  });

  it('should return a random number between 1 and 6', () => {
    const service: RollService = TestBed.get(RollService);

    spyOn(Math, 'random').and.returnValues(.55, .65, .75, .85);
    service.roll().subscribe(num => {
      expect(num).toBe(4);
    });
    service.roll().subscribe(num => {
      expect(num).toBe(4);
    });
    service.roll().subscribe(num => {
      expect(num).toBe(5);
    });
    service.roll().subscribe(num => {
      expect(num).toBe(6);
    });
  });
});
