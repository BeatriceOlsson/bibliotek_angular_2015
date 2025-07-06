import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSwitchComponent } from './image-switch.component';

describe('ImageSwitchComponent', () => {
  let component: ImageSwitchComponent;
  let fixture: ComponentFixture<ImageSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
