import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedMapComponent } from './searched-map.component';

describe('SearchedMapComponent', () => {
  let component: SearchedMapComponent;
  let fixture: ComponentFixture<SearchedMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
