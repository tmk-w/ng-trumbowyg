import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumbowygComponent } from './trumbowyg.component';

xdescribe('TrumbowygComponent', () => {
  let component: TrumbowygComponent;
  let fixture: ComponentFixture<TrumbowygComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrumbowygComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumbowygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
