import { Injectable, EventEmitter } from '@angular/core';
import { NewsData } from './news-data';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  onChange = new EventEmitter();

  private news: NewsData[] = [
    new NewsData('test1'),
    new NewsData('test2'),
    new NewsData('test3')
  ];

  public getNewsList(): NewsData[] {
    return this.news.slice();
  }

  public addNews(title: string) {
    this.news.push(new NewsData(title));
    this.onChange.emit();
  }

  public removeNews(index: number) {
    this.news.splice(index, 1);
    this.onChange.emit();
  }
}
