import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviewListComponent } from './moview-list.component';

describe('MoviewListComponent', () => {
  let component: MoviewListComponent;
  let fixture: ComponentFixture<MoviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
