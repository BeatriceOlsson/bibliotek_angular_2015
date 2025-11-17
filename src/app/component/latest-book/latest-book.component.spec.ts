import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBookComponent } from './latest-book.component';

describe('LatestBookComponent', () => {
  let component: LatestBookComponent;
  let fixture: ComponentFixture<LatestBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
