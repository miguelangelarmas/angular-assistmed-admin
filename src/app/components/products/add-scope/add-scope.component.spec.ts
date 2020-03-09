import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScopeComponent } from './add-scope.component';

describe('AddScopeComponent', () => {
  let component: AddScopeComponent;
  let fixture: ComponentFixture<AddScopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
