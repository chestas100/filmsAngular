import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviewItemComponent } from './moview-item.component';

describe('MoviewItemComponent', () => {
  let component: MoviewItemComponent;
  let fixture: ComponentFixture<MoviewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
