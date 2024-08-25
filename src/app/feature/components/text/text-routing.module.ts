import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextAnalyzerComponent } from './text-analyzer/text-analyzer.component';
import { DiffCheckerComponent } from './diff-checker/diff-checker.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'text-analyzer', component: TextAnalyzerComponent },
        { path: 'diff-checker', component: DiffCheckerComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class TextRoutingModule { }
