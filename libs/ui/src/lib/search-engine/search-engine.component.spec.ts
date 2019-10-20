import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchEngineComponent } from './search-engine.component';

import {
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';

describe('SearchEngineComponent', () => {
  let component: SearchEngineComponent;
  let fixture: ComponentFixture<SearchEngineComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchEngineComponent],
      imports: [
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatGridListModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEngineComponent);
    component = fixture.componentInstance;
    component.flightModels = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
