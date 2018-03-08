import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { MatDialog } from '@angular/material';
import { ValidationComponent } from '../../../../modals/validation/validation.component';
@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  constructor(private userService: UserService
  , private matDialog: MatDialog) {

  }

  ngOnInit() {
  }
  deleteAccount() {
    const dialogRef = this.matDialog.open(ValidationComponent, {
      data: {
        title: 'Suppression de compte',
        objectToDelete: 'votre compte'
      }
    });
    dialogRef.afterClosed()
    .subscribe(result => {
      if (result === true) {
        this.userService.deleteAccount()
        .subscribe(res => {
          this.userService.logOff();
        });
      }
    });
  }
}
