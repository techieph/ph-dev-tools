import { Routes } from '@angular/router';
import { TextAnalysisComponent } from './features/text-analysis/text-analysis.component';
import { ExcelViewerComponent } from './features/excel-viewer/excel-viewer.component';

export const routes: Routes = [
    { path: 'text-analysis', component: TextAnalysisComponent },
    { path: 'excel-viewer', component: ExcelViewerComponent},
    { path: '', redirectTo: '/text-analysis', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];
