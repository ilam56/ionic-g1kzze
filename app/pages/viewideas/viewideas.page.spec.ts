import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewideasPage } from './viewideas.page';

describe('ViewideasPage', () => {
  let component: ViewideasPage;
  let fixture: ComponentFixture<ViewideasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewideasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewideasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
