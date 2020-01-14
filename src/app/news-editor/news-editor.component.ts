import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class NewsEditorComponent implements OnInit {
  title: string;

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.title = '';
  }

  addNews() {
    this.newsService.addNews(this.title);
  }
}
