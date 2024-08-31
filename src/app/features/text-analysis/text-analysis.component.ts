import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-text-analysis',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-analysis.component.html',
  styleUrl: './text-analysis.component.scss'
})
export class TextAnalysisComponent {

    text!: string;

    characters!: string[];
    words!: string[];
    lines!: string[];
    sentences!: string[];
    paragraphs!: string[];

    alphabetCharacters!: string[];
    numberCharacters!: string[];
    whiteSpaces!: string[];
    specialCharacters!: string[];
    stopWords!: string[];

    subscription!: Subscription;

    constructor(private textService: TextService) {}

    ngOnInit() {
    }

    analyzeText() {
        if(this.text) {
            this.characters = this.textService.extractCharacters(this.text);
            this.words = this.textService.extractWords(this.text);
            this.lines = this.textService.extractLines(this.text);
            this.sentences = this.textService.extractSentences(this.text);
            this.paragraphs = this.textService.extractParagraphs(this.text);
            this.alphabetCharacters = this.textService.extractAlphabeticCharacters(this.text);
            this.numberCharacters = this.textService.extractNumericCharacters(this.text);
            this.whiteSpaces = this.textService.extractWhitespaces(this.text);
            this.specialCharacters = this.textService.extractSpecialCharacters(this.text);
            this.stopWords = this.textService.extractStopWords(this.words);
        }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
