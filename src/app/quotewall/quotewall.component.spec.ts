import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotewallComponent } from './quotewall.component';

describe('QuotewallComponent', () => {
  let component: QuotewallComponent;
  let fixture: ComponentFixture<QuotewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotewallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
