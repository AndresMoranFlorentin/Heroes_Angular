import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraComicsComponent } from './compra-comics.component';

import { Component } from '@angular/core';


describe('CompraComicsComponent', () => {
  let component: CompraComicsComponent;
  let fixture: ComponentFixture<CompraComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraComicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
