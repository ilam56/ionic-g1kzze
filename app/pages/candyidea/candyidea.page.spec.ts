import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CandyideaPage } from './candyidea.page';

describe('CandyideaPage', () => {
  let component: CandyideaPage;
  let fixture: ComponentFixture<CandyideaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyideaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CandyideaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
