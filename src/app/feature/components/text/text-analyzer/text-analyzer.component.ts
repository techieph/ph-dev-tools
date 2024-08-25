import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, debounceTime } from 'rxjs';

@Component({
    templateUrl: './text-analyzer.component.html',
    styleUrls: ['./text-analyzer.component.scss']
})
export class TextAnalyzerComponent implements OnInit, OnDestroy {

    text: string;
    charsCount: number;
    wordsCount: number;
    whiteSpaceCharsCount: number;
    linesCount: number;
    paragraphCount: number;

    averageCharsPerWord: number;
    averageCharsPerLine: number;
    averageCharsPerParagraph: number;
    averageWordsPerLine: number;
    averageWordsPerParagraph: number;

    subscription: Subscription;
    constructor() {}

    ngOnInit() {
    }

    analyzeText() {
        if(this.text) {
            this.charsCount = this.text.length;
            this.wordsCount = this.countWords(this.text);
            this.linesCount = this.countLines(this.text);
            this.paragraphCount = this.countParagraphs(this.text);
            this.whiteSpaceCharsCount = this.countWhitespaces(this.text);
            this.averageCharsPerWord = this.charsCount / this.wordsCount;
            this.averageCharsPerLine = this.charsCount / this.linesCount;
            this.averageCharsPerParagraph = this.charsCount / this.paragraphCount;
            this.averageWordsPerLine = this.wordsCount / this.linesCount;
            this.averageWordsPerParagraph = this.wordsCount / this.paragraphCount;
        }
    }

    private countWords(text: string): number {
        const words = text.trim().match(/\b\S+\b/g);
        return words ? words.length : 0;
    }

    private countWhitespaces(text: string): number {
        const whitespaces = text.match(/\s/g);
        return whitespaces ? whitespaces.length : 0;
    }

    private countLines(text: string): number {
        const lines = text.split(/\r?\n/).filter(line => line.trim().length > 0);
        return lines.length;
    }

    private countParagraphs(text: string): number {
        const paragraphs = text.split(/\r?\n\r?\n/).filter(paragraph => paragraph.trim().length > 0);
        return paragraphs.length;
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    
}
