import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDitailComponent } from './book-ditail.component';

describe('BookDitailComponent', () => {
  let component: BookDitailComponent;
  let fixture: ComponentFixture<BookDitailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDitailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDitailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
