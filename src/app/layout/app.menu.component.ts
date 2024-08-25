import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Text',
                items: [
                    { label: 'Text Analyser', icon: 'pi pi-fw pi-file', routerLink: ['/text/text-analyzer'] },
                    { label: 'Difference Checker', icon: 'pi pi-fw pi-check-square', routerLink: ['/text/diff-checker'] }
                ]
            }
        ];
    }
}
