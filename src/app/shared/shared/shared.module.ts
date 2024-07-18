import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

// import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SpinnerComponent
    
  ],
  exports: [
    CommonModule,
    SpinnerComponent
    
  ]
})
export class SharedModule { }
