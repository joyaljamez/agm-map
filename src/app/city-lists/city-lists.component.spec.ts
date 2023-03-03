import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityListsComponent } from './city-lists.component';

describe('CityListsComponent', () => {
  let component: CityListsComponent;
  let fixture: ComponentFixture<CityListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
