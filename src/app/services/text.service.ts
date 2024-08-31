import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }

  private stopWords: Set<string> = new Set([
    'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours', 
    'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 
    'herself', 'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 
    'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are', 
    'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 
    'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 
    'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 
    'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 
    'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 
    'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 
    'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 
    'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 
    'should', 'now'
  ]);

  public extractCharacters(text: string): string[] {
    const characters: string[] = Array.from(text);
    return characters;
  }

  public extractWords(text: string): string[] {
    const words = text.trim().match(/\b\S+\b/g) || [];
    return words;
  }

  public extractWhitespaces(text: string): string[] {
    const whitespaces = text.match(/\s/g) || [];
    return whitespaces;
  }

  public extractLines(text: string): string[] {
    const lines = text.split(/\r?\n/);
    return lines.filter(line => line.trim().length > 0);
  }

  public extractSentences(text: string): string[] {
    const sentences = text
        .split(/\r?\n/)
        .flatMap(line => line.split(/(?<=[.!?])\s+/))
        .filter(sentence => sentence.trim().length > 0);
    if (text.trim().endsWith('.') && !sentences.length) {
        sentences.push('');
    }
    return sentences;
}

  public extractParagraphs(text: string): string[] {
    const paragraphs = text.split(/\r?\n/).filter(paragraph => paragraph.trim().length > 0);
    return paragraphs;
  }

  public extractAlphabeticCharacters(text: string): string[] {
    return text.match(/[a-zA-Z]/g) || [];
  }

  public extractNumericCharacters(text: string): string[] {
    return text.match(/\d/g) || [];
  }

  public extractSpecialCharacters(text: string): string[] {
    return text.match(/[^a-zA-Z0-9\s]/g) || [];
  }

  public extractStopWords(textArray: string[]): string[] {
    return textArray.flatMap(text => 
        text.split(/\s+/)
            .map(word => word.toLowerCase())
            .filter(word => this.stopWords.has(word))
    );
  }

}
