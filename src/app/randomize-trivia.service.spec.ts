import { TestBed } from '@angular/core/testing';

import { RandomizeTriviaService } from './randomize-trivia.service';

describe('RandomizeTriviaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomizeTriviaService = TestBed.get(RandomizeTriviaService);
    expect(service).toBeTruthy();
  });
});
