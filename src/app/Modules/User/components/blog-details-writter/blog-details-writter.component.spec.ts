import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsWritterComponent } from './blog-details-writter.component';

describe('BlogDetailsWritterComponent', () => {
  let component: BlogDetailsWritterComponent;
  let fixture: ComponentFixture<BlogDetailsWritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailsWritterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogDetailsWritterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
