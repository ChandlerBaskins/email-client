import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  email: Email;
  constructor(private route: ActivatedRoute) {
    //  Could assign the snapshot just in case the sub  doesnt  finish
    //this.email = route.snapshot.data.email
    this.route.data.subscribe(({ email }) => {
      this.email = email;
    });
  }

  ngOnInit(): void {
    //this works but the downside is req arent cancelled when user navigates away
    //req could be out of order
    // this.route.params.subscribe(({ id }) => {
    //   this.emailService.getEmail(id).subscribe((email) => {
    //     console.group(email);
    //   });
    // });
    // this.route.params
    //   .pipe(
    //     switchMap(({ id }) => {
    //       return this.emailService.getEmail(id);
    //     })
    //   )
    //   .subscribe((email) => {
    //     this.email = email;
    //   });
  }
}
