import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchEngineComponent } from 'libs/ui/src/lib/search-engine/search-engine.component';

import {
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, SearchEngineComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatGridListModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.flightModels = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
