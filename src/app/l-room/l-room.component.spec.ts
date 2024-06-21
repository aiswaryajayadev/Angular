import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LRoomComponent } from './l-room.component';

describe('LRoomComponent', () => {
  let component: LRoomComponent;
  let fixture: ComponentFixture<LRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
