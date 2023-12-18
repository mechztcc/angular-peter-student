import { TestBed } from '@angular/core/testing';

import { LessonRunnerService } from './lesson-runner.service';

describe('LessonRunnerService', () => {
  let service: LessonRunnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonRunnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
