import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDialogAnimationsExampleDialogComponent } from './dialog-dialog-animations-example-dialog.component';

describe('DialogDialogAnimationsExampleDialogComponent', () => {
  let component: DialogDialogAnimationsExampleDialogComponent;
  let fixture: ComponentFixture<DialogDialogAnimationsExampleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDialogAnimationsExampleDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDialogAnimationsExampleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
