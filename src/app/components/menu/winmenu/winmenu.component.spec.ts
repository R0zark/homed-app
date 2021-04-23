import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinmenuComponent } from './winmenu.component';

describe('WinmenuComponent', () => {
  let component: WinmenuComponent;
  let fixture: ComponentFixture<WinmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
