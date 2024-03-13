import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvertidorMonedaPage } from './convertidor-moneda.page';

describe('ConvertidorMonedaPage', () => {
  let component: ConvertidorMonedaPage;
  let fixture: ComponentFixture<ConvertidorMonedaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConvertidorMonedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
