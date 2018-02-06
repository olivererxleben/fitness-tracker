import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    // MatModules
    MatButtonModule,
  ],
  exports: [
    MatButtonModule
  ]
})
export class MaterialModule {}
