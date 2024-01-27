import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsComponent } from './starwars.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadingComponent } from '../loading/loading.component';

describe('StarwarsComponent', () => {
  let component: StarwarsComponent;
  let fixture: ComponentFixture<StarwarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ StarwarsComponent, LoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarwarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
