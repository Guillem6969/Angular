import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByNAmeComponent } from './search-by-name.component';

describe('SearchByNAmeComponent', () => {
  let component: SearchByNAmeComponent;
  let fixture: ComponentFixture<SearchByNAmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchByNAmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByNAmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
