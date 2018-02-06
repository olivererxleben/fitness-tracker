import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTrainingComponent } from './new-training/new-training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { TrainingComponent } from './training/training.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewTrainingComponent, CurrentTrainingComponent, PastTrainingComponent, TrainingComponent],
  exports: [NewTrainingComponent, CurrentTrainingComponent, PastTrainingComponent, TrainingComponent]
})
export class TrainingModule { }
