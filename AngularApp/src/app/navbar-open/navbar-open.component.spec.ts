import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOpenComponent } from './navbar-open.component';

describe('NavbarOpenComponent', () => {
  let component: NavbarOpenComponent;
  let fixture: ComponentFixture<NavbarOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
