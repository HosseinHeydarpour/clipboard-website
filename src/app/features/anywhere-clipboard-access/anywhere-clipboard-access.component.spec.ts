import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnywhereClipboardAccessComponent } from './anywhere-clipboard-access.component';

describe('AnywhereClipboardAccessComponent', () => {
  let component: AnywhereClipboardAccessComponent;
  let fixture: ComponentFixture<AnywhereClipboardAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnywhereClipboardAccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnywhereClipboardAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
