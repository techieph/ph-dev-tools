import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as XLSX from 'xlsx';
import { ExcelDataReaderService } from '../../services/excel-data-reader.service';

@Component({
  selector: 'app-excel-viewer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './excel-viewer.component.html',
  styleUrl: './excel-viewer.component.scss'
})
export class ExcelViewerComponent {

    sheets!: string[];
    sheetsData!: {[key: string]: any[][]};

    subscription!: Subscription;

    constructor(private excelDataReaderService: ExcelDataReaderService) {}

    ngOnInit() {
    }

    onExcelFileUpload(evt: any) {
        const target: DataTransfer = <DataTransfer>(evt.target);
        this.excelDataReaderService.readExcelFile(target.files[0]).then(data => {
            this.sheetsData = data;
            this.sheets = Object.keys(this.sheetsData);
            console.log("All Sheets Data: ", this.sheetsData);
          }).catch(error => {
            console.error("Error reading Excel file", error);
          });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
