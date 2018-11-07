import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoInvestimentosComponent } from './conteudo-investimentos.component';

describe('ConteudoInvestimentosComponent', () => {
  let component: ConteudoInvestimentosComponent;
  let fixture: ComponentFixture<ConteudoInvestimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteudoInvestimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoInvestimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
