import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
} from '@angular/material';

/**
 * The Material Module is used to cluster all Angular Material Components imports
 */
@NgModule({
  imports: [
    // MatModules
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule {}
