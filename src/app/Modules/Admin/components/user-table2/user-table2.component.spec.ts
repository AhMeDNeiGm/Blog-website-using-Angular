import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTable2Component } from './user-table2.component';

describe('UserTable2Component', () => {
  let component: UserTable2Component;
  let fixture: ComponentFixture<UserTable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTable2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
