
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './adminLayout-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
// import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,

    AdminLayoutRoutingModule,


  ],
})
export class AdminLayoutModule { }
