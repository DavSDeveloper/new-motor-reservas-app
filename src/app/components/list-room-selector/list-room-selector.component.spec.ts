import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRoomSelectorComponent } from './list-room-selector.component';

describe('ListRoomSelectorComponent', () => {
  let component: ListRoomSelectorComponent;
  let fixture: ComponentFixture<ListRoomSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRoomSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRoomSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
