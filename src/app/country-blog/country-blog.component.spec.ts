import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryBlogComponent } from './country-blog.component';

describe('CountryBlogComponent', () => {
  let component: CountryBlogComponent;
  let fixture: ComponentFixture<CountryBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
