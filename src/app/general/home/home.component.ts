import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ExcelDataReaderService } from '../../services/excel-data-reader.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    sheets!: string[];
    sheetsData!: {[key: string]: any[][]};

    subscription!: Subscription;

    constructor(private excelDataReaderService: ExcelDataReaderService) {}

    ngOnInit() {
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
