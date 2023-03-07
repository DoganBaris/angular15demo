import { SnacBarType } from '../common/enum/snacBarType'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackBar {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, duration: number = 2500, snacbarType: SnacBarType): void {
    this._snackBar.open(message, undefined, {
      duration: duration,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: [snacbarType.toString()]
    })
  }
}