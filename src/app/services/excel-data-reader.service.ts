import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelDataReaderService {

  constructor() { }

  readExcelFile(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader: FileReader = new FileReader();
      
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        const sheetsData: {[key: string]: any[][]} = {};
        
        wb.SheetNames.forEach(sheetName => {
          const ws: XLSX.WorkSheet = wb.Sheets[sheetName];
          sheetsData[sheetName] = XLSX.utils.sheet_to_json(ws, { header: 1 });
        });
        
        resolve(sheetsData);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsBinaryString(file);
    });
  }

}
