import { Injectable ,signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  isLoggedIn=signal(false);

  login() {
    this.isLoggedIn.set(true);
  }
  logOut() {
    this.isLoggedIn.set(false);
  }
}
