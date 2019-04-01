import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SampleComponent } from './sample.component';
import { CommonModule } from '@angular/common';

const sampleRoutes: Routes = [
  { path: '', component: SampleComponent }
];

@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(sampleRoutes)
  ],
  providers: [
  ],
  entryComponents: [
  ]
})
export class SampleModule { }
