import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathRoomComponent } from './bath-room.component';

describe('BathRoomComponent', () => {
  let component: BathRoomComponent;
  let fixture: ComponentFixture<BathRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BathRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
