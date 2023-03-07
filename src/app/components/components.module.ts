

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import { MatPaginatorModule } from '@angular/material/paginator';



import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

const materialModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatTableModule,
  MatButtonModule,
  // MatAutocompleteModule,
  //   MatCheckboxModule,
  // MatDatepickerModule,
  //   MatNativeDateModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatRadioModule,
  //   MatSliderModule,
  //   MatSlideToggleModule,
  //   MatMenuModule,


  //   MatCardModule,
  //   MatDividerModule,
  //   MatExpansionModule,
  //   MatGridListModule,

  //   MatStepperModule,
  //   MatTabsModule,
  //   MatTreeModule,
  //   MatButtonModule,
  //   MatButtonToggleModule,
  //   MatBadgeModule,
  //   MatChipsModule,

  //   MatProgressSpinnerModule,
  //   MatProgressBarModule,
  //   MatRippleModule,
  //   MatBottomSheetModule,
  //   MatDialogModule,
  //   MatSnackBarModule,
  //   MatTooltipModule,
  //   MatPaginatorModule,
  //   MatSortModule,

  //   MatSelectModule,

];
@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...materialModules
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }

