import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { TextRoutingModule } from './text-routing.module';
import { InputTextareaModule } from "primeng/inputtextarea";
import { FormsModule } from '@angular/forms';
import { TextAnalyzerComponent } from './text-analyzer/text-analyzer.component';
import { DiffCheckerComponent } from './diff-checker/diff-checker.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TextRoutingModule,
		InputTextareaModule,
	],
	declarations: [ TextAnalyzerComponent, DiffCheckerComponent ]
})
export class TextModule { }
