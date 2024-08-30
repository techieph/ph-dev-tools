import { Routes } from '@angular/router';
import { TextAnalysisComponent } from './features/text-analysis/text-analysis.component';

export const routes: Routes = [
    { path: 'text-analysis', component: TextAnalysisComponent },
    { path: '', redirectTo: '/text-analysis', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];
