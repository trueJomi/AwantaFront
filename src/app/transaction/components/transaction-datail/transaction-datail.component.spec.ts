import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDatailComponent } from './transaction-datail.component';

describe('TransactionDatailComponent', () => {
  let component: TransactionDatailComponent;
  let fixture: ComponentFixture<TransactionDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionDatailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
