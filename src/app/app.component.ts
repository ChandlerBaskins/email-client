import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  signedin$: BehaviorSubject<boolean>;
  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }

  ngOnInit() {
    this.authService.checkAuth().subscribe(() => {});
  }
  // or we could do this way without using the async  pipe
  //just reference the signedin prop in your template
  // ngOnInit()  {
  //   this.authService.signedin$.subscribe((signedin) => {
  //     this.signedin = signedin
  //   })
  // }
}
