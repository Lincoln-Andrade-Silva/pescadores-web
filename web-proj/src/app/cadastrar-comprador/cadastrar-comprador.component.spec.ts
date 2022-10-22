import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCompradorComponent } from './cadastrar-comprador.component';

describe('CadastrarCompradorComponent', () => {
  let component: CadastrarCompradorComponent;
  let fixture: ComponentFixture<CadastrarCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCompradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
