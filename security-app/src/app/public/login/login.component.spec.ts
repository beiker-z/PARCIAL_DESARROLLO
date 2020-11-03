import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientModule, RouterTestingModule, FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click should invoke OnLogin', fakeAsync(() => {

    spyOn(component, 'onLogin');
    let bnt = fixture.debugElement.nativeElement.querySelector('button');
    bnt.click();
    tick();
    expect(component.onLogin).toHaveBeenCalled();

  })
  );

  it('should form invalid', () => {
    component.onLogin();
    expect(component.user.userName).toEqual('');
    expect(component.user.password).toEqual('');
  });

  it('shuld login valid', async function () {

    component.user.userName = 'admin';
    component.user.password = 'admin';
    await component.onLogin();
    expect(component.res.message).toEqual('succefully');
  });
});
