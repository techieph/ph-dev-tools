import { Routes } from '@angular/router';
import { TextAnalysisComponent } from './features/text-analysis/text-analysis.component';
import { ExcelViewerComponent } from './features/excel-viewer/excel-viewer.component';
import { HomeComponent } from './general/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'text-analysis', component: TextAnalysisComponent },
    { path: 'excel-viewer', component: ExcelViewerComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
